const express = require('express');
const router = express.Router();

router.get("/logout", function(req, res){
    res.send("This is logout page");
})

module.exports = router;