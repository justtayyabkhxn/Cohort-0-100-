const express = require("express");
const app = express();

const port = 3000;
app.use(express.json());

app.post("/app", (req, res) => {
    const name = req.body.name;
    const dob = req.body.dob;
    res.json({
        nameda: name,
        dobda: dob
    });
})
app.listen(port);