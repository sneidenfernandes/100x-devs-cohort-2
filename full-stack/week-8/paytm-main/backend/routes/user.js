

const express = require("express");
const userRouter = express.Router();
const {z} = require("zod");
const {User,Account} = require("../db.js");
const {JWT_SECRET} = require("../config.js");
const jwt = require("jsonwebtoken");
const {authMiddleware} = require("../middleware.js");


// input validation 
const signUpBody = z.object({
    email: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string()
});



// sign up route
userRouter.post("/signup", async (req,res) => {
    
    const {success} = signUpBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect Input."

        })
    }

   
    const existingUser = await User.findOne({
        email: req.body.email
    })

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken."
        })
    } 

    const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully.",
        token: token
    })


    
 
});


const signInSchema = z.object({
    email: z.string(),
    password: z.string()
})

// sign in route
userRouter.post('/signin', async (req,res)=> { 

    const {success} = signInSchema.safeParse(req.body) 

    if(!success){
        return res.status(411).json({
            message: "Incorrect Inputs.",
        })
    }

    const user = await User.findOne({
        email : req.body.email,
        password : req.body.password
    });

    console.log(user)


    if(user){
        const token = jwt.sign({
        userId: user._id
        }, JWT_SECRET);


        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })


} );


// route to update user information 

const userUpdateShcema = z.object({
    password: z.string().optional(),
})

userRouter.put('/update-password',authMiddleware, async (req,res)=>{
    const {success} = userUpdateShcema.safeParse(req.body)
    
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    console.log(req.userId)


    await User.updateOne( {
        _id: req.userId
    }, {"$set" :{"password": req.body.password}})
    
    res.json({
        message: "Updated successfully."
    })


})



// route to get users based on query 

userRouter.get("/bulk", async (req,res)=> {
    const filter = req.query.filter || ""
    
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex" : filter
            }
        },
            {
                lastName:{
                "$regex": filter
                }
            }
        ]
    })

    res.json({
        user: users.map(user=>({
            email : user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = userRouter; 


