const express = require("express");
const bodyParser = require("body-parser");
const port = 3000
const app = express();

app.get('/', function (req, res) {
    const message = req.query.message
    console.log(message);
    res.status(404).send({
        name: "Tayyab Khan",
        class: "MCA"
    })
})

app.listen(port);