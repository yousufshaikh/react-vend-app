const express = require('express');
const router = express.Router();

router.get('/signup', function(req, res){
    res.send("This is signup page");
})

module.exports = router;