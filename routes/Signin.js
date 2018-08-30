const express = require('express');
const router = express.Router();
 
router.get('/signin', function(req, res){
    res.send("This is signin page this is wonderful");
})

module.exports = router;