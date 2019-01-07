const express = require('express');
const router = express.Router();
var School = require('../models/school');


router.get('/schools', (req, res) => {
    School.find().then(schools => {
        res.status(200).json(schools);
    }).catch(err => res.status(400).json(err) )
})

router.get('/school/:id', (req, res) => {
    School.findById({_id: req.params.id})
        .then(school => res.status(200).json(school))
        .catch(err => res.status(400).json(err))
})



module.exports = router;