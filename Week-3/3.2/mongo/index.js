const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://tayyabk2002:se6bSeGerC1yZsV6@cluster0.w1qpdsc.mongodb.net/First");

const User = mongoose.model("Users", {
    name: String, email: String, password: String
});

app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const userExits = await User.findOne({ email: username });
    if (userExits)
        return res.json({
            msg: "User Already Exists!"
        });
    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save().then(console.log("Done" + user));
    res.json({
        msg: "User Creation succesfull"
    });
})

app.listen(3000)

