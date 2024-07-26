const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect("mongodb+srv://tayyabk2002:se6bSeGerC1yZsV6@cluster0.w1qpdsc.mongodb.net/First");

const User = mongoose.model("Users", {
    name: String, email: String, password: String
});

function signUp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = new User({
        name: name,
        email: email,
        password: password
    });
    user.save().then(console.log("Done" + user));
    console.log(user);
}
