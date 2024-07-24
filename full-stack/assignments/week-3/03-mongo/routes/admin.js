const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db/index.js")
const {Course} = require("../db/index.js")

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // check is a user with this username already exists

    Admin.create({
        username: username,
        password: password
    })
    .then(
        res.json({
            msg: "Admin created succesfully."
        })
    )
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price

    })


    res.json({
        message: "Course created succesfully",
        newCourse: newCourse._id
    })

    

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({})
    res.json({
        courses: response
    })
});

module.exports = router;