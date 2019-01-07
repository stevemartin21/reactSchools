const express = require('express');
const router = express.Router();
var School = require('../models/school');

router.delete('/school/:id', (req, res) => {
    School.deleteOne({_id: req.params.id})
        .then(school => {
            console.log(school)
            res.status(200).json(school)
        }).catch( err => res.status(400).json(err))
})


module.exports = router;