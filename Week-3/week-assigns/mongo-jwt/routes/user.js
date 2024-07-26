const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
const jwt=require("jsonwebtoken");
const JWT_SECRET="tayyab";

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check user
    await User.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin created succesfully"
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const isValidUser = await User.findOne({ username: username });
    if (isValidUser) {

        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    }
    else
        res.json({
            msg: "Unauthorised connection"
        })
});

router.get('/courses',userMiddleware,async (req, res) => {
    // Implement listing all courses logic
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

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const username=res.username;
    const id=req.params.courseId;
    const courses=await Course.find({
        _id:id
    });
    res.json({
        courses:courses
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses 
});

module.exports = router