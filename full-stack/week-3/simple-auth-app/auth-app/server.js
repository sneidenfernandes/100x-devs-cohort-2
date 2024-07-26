const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const app = express();
const port = 3000;
const cors = require('cors');


const SECRET_KEY = "secret";

app.use(bodyParser.json());
app.use(cors());

const loginSchema = z.object({
    username: z.string(),
    password: z.string()
});

const user = {
    username: 'user',
    password: 'password'
}

app.post('/login', (req, res)=>{
     try{

        const {username, password} = loginSchema.parse(req.body);
        console.log("Login Request Successful.")

        if(username === user.username && password === user.password){
            const token = jwt.sign({username}, SECRET_KEY)
            res.status(200).send({token});
        }else{
            res.status(400).send({message: "invalid input"});
        }


        

     } catch(error){
        res.status(400).send({message: "invalid input"});
        console.log("Login Request Failed.")
     }
});

const verifyToken = (req,res,next) => {
    const token = req.headers['authorization'];
    console.log(token)
    if(token){
        jwt.verify(token, SECRET_KEY, (err,decoded)=>{
            if(err){
                console.log("jwt error");
                return res.status(401).send({message:'invalid token'});
                
            }else {
                console.log("works")
                req.user = decoded;
                next();
            }
        })
    }else{
        console.log("something else");
        return res.status(401).send({message:'invalid token'});
    }
}

app.get('/user', verifyToken, (req, res)=>{
    console.log("User Request Successful.")
    res.status(200).send({ username : req.user.username});
});

app.use(express.static('public'));

app.listen(port,()=>{
    console.log('Server is up!')
} );