const express = require("express");
const z = require("zod");
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://tayyabk2002:se6bSeGerC1yZsV6@cluster0.w1qpdsc.mongodb.net/newadmins");
const Admin = mongoose.model("newadmins", {
    username: String, password: String
});

const app = express();
app.use(express.json());

const usernameSchema = z.string().email();

//Admin routes

app.post("/admin/signup", async (req, res) => {
    const username = req.body.username;
    const isUsernameValid = usernameSchema.safeParse(username);
    if (!isUsernameValid.success) {
        res.json({
            msg: "invalid username"
        })
        return;
    }
    const password = req.body.password;
    const userExists = await Admin.findOne({ username: username })
    if (userExists) {
        res.json({
            msg: "User already exists"
        });
        return;
    }
    const newAdmin = new Admin({
        username: username,
        password: password
    });
    newAdmin.save().then(console.log(password, username));
    res.json({
        msg: "Admin created successfully"
    });
})

mongoose.connect("mongodb+srv://tayyabk2002:se6bSeGerC1yZsV6@cluster0.w1qpdsc.mongodb.net/newadmins");
const Course = mongoose.model("newcourses", {
    title: String, description: String, price: Number, imgLink: String
});


app.post("/admin/courses", async (req, res) => {
    const username=req.headers["username"];
    const password=req.headers["password"];
    const courseTitle = req.body.title;
    const courseDescription = req.body.description;
    const coursePrice = req.body.price;
    const courseImgLink = req.body.imageLink;

    const courseExists = await Course.findOne({ title: courseTitle })
    if (courseExists) {
        res.json({
            msg: "Course already exists"
        });
        return;
    }

    const newCourse = new Course({
        title: courseTitle,
        description: courseDescription,
        price: coursePrice,
        imgLink: courseImgLink
    });

    newCourse.save().then(console.log("New Course added!"));
    res.json({
        msg: "Course created successfully"
    });

})

app.listen(3000);