const express = require('express');
const router = express.Router();


router.get('users', (req, res) => {
    console.log('got those users')
})



module.exports = router;