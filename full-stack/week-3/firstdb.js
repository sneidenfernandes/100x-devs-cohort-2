const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sneiden:kp7AC0458KcNRRWJ@cluster0.l4godw5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


const User = mongoose.model('Users', {name: String, email: String, password: String});


const user = new User({name: "Harkirat Singh", email: "something@gmail.com", password: "123456"});
user.save();
