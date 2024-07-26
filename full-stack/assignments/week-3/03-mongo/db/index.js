const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sneiden:uXoCu1i69OkbLSKk@cluster0.l4godw5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
    purchasedCourses: [
        {
            type: mongoose.Typed.ObjectId,
            ref: 'Course'
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}