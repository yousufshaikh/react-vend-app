const express = require('express');
const router = express.Router();
// const User = require('../models/User');
const UserSession = require('../models/UserSession');

router.put("/logout", function(req, res, next){
    // const {query} = req;
    // const {token} = query;

    UserSession.findOneAndUpdate({_id:req.query.token, isDeleted:false}, {$set:{isDeleted:true}} , null, function(error, sessions){
        if(error){
            return res.send({success: false, message: "Error: Server error"});
        }
            return res.send({success: true, message: 'UserSession is deleted to true'});
    });
});

module.exports = router;