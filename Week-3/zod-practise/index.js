const express = require("express");
const zod = require("zod");

const app = express();
const port = 3000;
app.use(express.json());
const schema = zod.array(zod.number());
app.post("/kid", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) res.json({
        msg: "Invalid input"
    });
    else res.json({
        msg: "Valid Input"
    });
    console.log(response);
});

app.listen(port);