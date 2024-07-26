const express = require("express");
const port = 3000;
const app = express();

// app.get('/', function (req, res) {
//     res.send('<b><i>Tayyab Khan</i></b>');
// })

app.post('/tayyab', function (req, res) {
    console.log(req.headers);
    console.log(req.headers["authorization"]);
    res.send({
        lol: "Laugh"
    })
})

app.listen(port);