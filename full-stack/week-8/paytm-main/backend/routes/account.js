
const express = require("express");
const accountRouter = express.Router();
const {Account} = require("../db.js");
const { authMiddleware } = require("../middleware");
const mongoose = require("mongoose")


accountRouter.get("/balance", authMiddleware, async  (req,res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    });
})


// // bad solution 

// accountRouter.get("/transfer", authMiddleware, async (req,res) => {


//     const {amount, to} = req.body;

//     // getting "from" account from the db
//     const account = Account.findOne({
//         userId: req.userId
//     })

//     // returnign error if balance is not sufficient
//     if (account.balance < amount){
//         return res.status(400).json({
//             message: " Insufficient balance"
//         })
//     }


//     // getting "to" account from the db

//     const toAccount = await Account.findOne({
//         userId: to
//     });

//     if (!toAccount){
//         return res.status(400).json({
//             message: "Invalid account"
//         })
//     }


//     // updating the  "from" account
//     await Account.updateOne({
//         userId: req.userId
//     }, {
//         $inc: {
//             balance: -amount
//         }
//     })

//     // updating the "to" Account
    
//     await Account.updateOne({
//         userId: to
//     }, {
//         $inc: {
//             balance: amount
//         }
//     })


//     res.json({
//         message: "Transfer successfull"
//     })


// })


accountRouter.post("/transfer", authMiddleware, async (req, res) => {
    

    const session = await mongoose.startSession();

    session.startTransaction();

    const {amount, to} = req.body;

    const account = await Account.findOne({userId: req.userId}).session(session);

    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });

    }

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    await Account.updateOne({userId: req.userId}, {$inc:{ balance:-amount}}).session(session);
    await Account.updateOne({userId: to}, {$inc: {balance: amount}}).session(session);

    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    })


});




    
  


  

module.exports = accountRouter;
