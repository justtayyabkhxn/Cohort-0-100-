const express = require("express");
const app = express();

function ageCheck(req, res, next) {
    const age = req.query.age;
    if (age >= 18)
        next();
    else
        return res.json({
            msg: "You are below 18"
        });
}
app.get("/ride1",ageCheck, (req, res) => {
    res.json({
        msg: "You can access the ride"
    })
})

app.listen(3000);