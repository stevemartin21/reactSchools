const express = require('express');
const router = express.Router();

router.delete('user', (req, res) => {
    console.log('deleted that user');
})


module.exports = router;