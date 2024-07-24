const {User} = require("../db/index.js")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const password = req.headers.password;
    const username = req.headers.username;
    
    User.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            console.log("validation successfull")
            next();
            
        }else{
            res.status(403).json({
                msg: "User doesn't exist"
            })
        }
    })
}

module.exports = userMiddleware;