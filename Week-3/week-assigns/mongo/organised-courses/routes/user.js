const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password,
    })
    res.json({
        msg: "User created succesfull"
    })
});

router.get('/courses', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const userExists = await User.findOne({ username: username });
    if (userExists) {
        res.json({
            allCourses: await Course.find({})
        })
    }
    else
        res.json({
            msg: "User Invalid"
        })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    },
        {
            "$push": {
                purchasedCourses: courseId
            }

        })
    res.json({
        msg: "Purchase Complete"
    })

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user=await User.findOne({
        username:req.headers.username
    });

    const courses=await Course.findOne({
        _id:{
            "$in":user.purchasedCourses
        }
    });
    res.json({
        courses:courses
    })
});

module.exports = router