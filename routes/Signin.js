const express = require('express');
const router = express.Router();
 
router.get('/helloworld', function(req, res){
    res.send("This is signin page");
})

module.exports = router;