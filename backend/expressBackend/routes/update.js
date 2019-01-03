const express = require('express');
const router = express.Router();

router.put('user', (req, res) => {
    console.log('updated those users');
})


module.exports = router;