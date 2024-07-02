const express = require("express");
const jwt  = require("jsonwebtoken");
const jwtPassword = "12345678";

const app = express();
app.use(express.json());
const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name:"harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password:"12342",
        name: "raman the jap"
    },
    {
        username:"priyakumari@gmail.com",
        password:"123253",
        name:"priya kumari" 
    }];


function userExists(username, password){
    let userExists = false;
    for (let i = 0; i<ALL_USERS.length; i++){
        if (ALL_USERS[i].username === username && ALL_USERS[i].password === password ){
             userExists = true;
        }
        return userExists;
    }
};

app.post('/signin', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username,password)){
        res.status(403).json({
            msg : "User does not exist in our db"
        })
    }
    
    const token = jwt.sign({username:username}, jwtPassword);
    return res.json({
        token,
    });
    
});



app.get("/users", function(req, res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users: ALL_USERS.filter(function(value){
                if (value.username === username){
                    return false;
                }else{
                    return true;
                }
            })
        });
    } catch (err){
        return res.status(403).json({
            msg:"Invalid token",
        });
    }
})

app.listen(3000);
