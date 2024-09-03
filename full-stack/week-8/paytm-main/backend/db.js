
// import mongoose
const mongoose = require("mongoose");

// connection string
const url = "mongodb+srv://sneiden:uXoCu1i69OkbLSKk@cluster0.l4godw5.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster0";

// connect to db
mongoose.connect(url)


// create user Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});



// Create account schema

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number, 
        required: true
    }
});

// Create user model
const User = new mongoose.model('User', userSchema)
const Account = new mongoose.model('Account', accountSchema);



// Export user model
module.exports = {
    Account,
    User
}



