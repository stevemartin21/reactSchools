const express = require('express');
const router = express.Router();
var School = require('../models/school');

router.put('user', (req, res) => {
    console.log('updated those users');
})

router.put('/school/:id', (req, res) => {
    console.log(req.body)
    const schoolData = {
        title: req.body.title,
        year: req.body.year,
        city: req.body.city,
        county: req.body.county,
        history: req.body.history,
        schoolType: req.body.schoolType
    }

    School.updateOne({_id: req.params.id}, schoolData)
        .then(school => {
            console.log(school)
            res.status(200).json(school)
        })
        .catch(err => res.status(400).json(err));
})


module.exports = router;