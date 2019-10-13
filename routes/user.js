var jwt = require('jsonwebtoken');
var user = require('../model/user');
const config = require('../config');

var authenticate = function(req,res,next){
    console.log('In Authenticate');    
    user.getUserDetails(req.body.email)    
    .then(userData => {        
        if(userData.length == 0){
            res.status(401).send({message: "user doesn't exist in our database"});
        }
        console.log('userData is', userData);      
        const user = {email : userData[0].email, 
                    user_id: userData[0].id,
                    permissions: [userData[0].role]};
        const token  = jwt.sign(user, config.secret_key,{expiresIn: 60 * 120});        
        return res.send({token});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message: "Internal error"})
    });
}

module.exports = {    
    authenticate : authenticate
}
    