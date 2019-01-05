const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
const passport = require('passport');

var User = require('../models/user');
var School = require('../models/school');

// Validate Input 

const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      });
    }
);


router.post('/user', (req, res, next) => {
    console.log(req.body);
    console.log('one');

    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
      }
    
    User.findOne({email: req.body.email})
        .then(user => {
        console.log('2')
        if (user) {
            res.status(400).json({message: 'There is already a user with that email'})
        } else {

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })

            console.log(newUser);

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err ) throw err;
                    newUser.password = hash;
                    console.log(hash);
                    newUser.save()
                        .then(newUser => {
                            res.status(200).json(newUser)
                        }).catch(error => {
                            res.status(400).json(error);
                        })
                } )
            })
        }    
    })
})


let selectedUser;

router.post('/token', (req, res ) => {

    const { errors, isValid } = validateLoginInput(req.body); 
    
    if (!isValid) {
        return res.status(400).json(errors);
      }

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(400).json({message: 'There was no user with that email'})
        } else {
            selectedUser = user;
          return  bcrypt.compare(req.body.password, user.password);
        }
    }).then(success => {
        if(!success) {
            return res.status(400).json({message: 'Passwords do not match'})
        }

       const token = jwt.sign(
        {email: selectedUser.email, userId: selectedUser._id, name: selectedUser.name},
        keys.secretOrKey,
        {expiresIn: '1h'}
       )

       console.log(token);
       res.status(200)
        .json({token: 'Bearer ' + token,
        expiresIn: '3600',
        userId: selectedUser._id
        })
    }).catch(error => {
        res.status(400).json({message: 'There was an error'
        })
    })
})


// create school

router.post('/school', (req, res ) => {
    console.log(req.body);
    const school = new School({
        title: req.body.title,
        year: req.body.year,
        city: req.body.city,
        county: req.body.county,
        history: req.body.history,
        schoolType: req.body.schoolType
    })

    school.save().then(school => {
        res.status(200).json({school: school, message: 'It was a success'})
    }).catch( error => {
        res.status(400).json({message: 'There was an error'});
    })
})


module.exports = router;