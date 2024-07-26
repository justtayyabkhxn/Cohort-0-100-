const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User } = require("../../mongo/organised-courses/db");
const router = Router();
const {Admin,Course}=require("../db");
const jwt=require("jsonwebtoken");
const {secret}=require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check user
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin created succesfully"
    });
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isValidUser = await Admin.findOne({ username: username });
    if (isValidUser) {

        const token = jwt.sign({
            username
        }, secret);
        res.json({
            token
        })
    }
    else
        res.json({
            msg: "Unauthorised connection"
        })
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imgLink = req.body.imgLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imgLink,
        price
    })
    res.json({
        msg: "Course created successfully ",
        id:newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})

    res.json({
        courses:response
    })
});

module.exports = router;