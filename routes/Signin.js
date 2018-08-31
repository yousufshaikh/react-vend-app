const express = require('express');
const router = express.Router();
const User = require('../models/User');
const UserSession = require('../models/UserSession');

 
router.get('/signin', function(req, res){
    res.send("This is signin page this is wonderful");
})

router.post('/signin', function(req, res, next){
    const { body } = req;

    const {
        password
    } = body;

    let {
        email
    } = body;


    if(!email){
        return res.send({
            success: false,
            message: "Error: email field can't be blank"
        });
    }
    if(!password){
        return res.send({
            success: false,
            message: "Error: password field can't be blank"
        });
    }

    email = email.toLowerCase();

    User.find({
        email: email
    },(err, users)=>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        else if(users.length != 1){
            return res.send({
                success: false,
                message: 'Error: Invalid'
            })
        }

        const user = users[0];
        if(!user.validPassword(password)){
            return res.send({
                success: false,
                message: 'Error: Invalid'
            })
        }

        // authentic user

        const userSession = new UserSession()
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if(err){
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            else if(doc){
                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                })
            }
        })

    });
});

module.exports = router;