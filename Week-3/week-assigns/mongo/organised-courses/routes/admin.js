const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// router.use(Router.json());

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

router.post('/courses', adminMiddleware, async (req, res) => {

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

router.get('/courses', adminMiddleware, async (req, res) => {
    const response=await Course.find({});
    res.json({
        courses:response
    })
});

module.exports = router;