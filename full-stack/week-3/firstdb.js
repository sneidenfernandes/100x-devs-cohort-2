const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
mongoose.connect("mongodb+srv://sneiden:uXoCu1i69OkbLSKk@cluster0.l4godw5.mongodb.net/user_app?retryWrites=true&w=majority&appName=Cluster0")

const User =  mongoose.model('Users', {name: String, email:String, password: String});


app.get('/signup', async function(req,res){
    const username = req.username;
    const name = req.name;
    const password = req.password;

    const existingUser = await User.findone({email: username});

    if(exisitingUser){
        return res.status(400).send("User already exists!");
    }
    

    const user  = new User({
        name: name,
        email: username,
        password: password
    });

    user.save();
    json.send({
        "msg": "User successfully created."
    });
});