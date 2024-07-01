const express = require("express");
const jwt  = require("jsonwebtoken");
const jwtPassword = "12345678";

const app = express();

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
    for (let i = 0; i<ALL_USERS.length; i++){
        
    }
};

app.post('/', function(res,))