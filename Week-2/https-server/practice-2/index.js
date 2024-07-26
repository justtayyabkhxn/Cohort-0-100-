const express = require("express");
const bodyParser = require("body-parser");
const port = 3002;
const app = express();

app.use(bodyParser.json());

app.post('/tayyab', function (req, res) {
    console.log(req.body);
    // console.log(req.headers["authorization"]);
    res.send(
        {
            name: "Tayyab",
            clss: "MCA",
            dob:"21/07/02"
        }
    )
})

// app.get('/', function (req, res) {
//     res.send({
//         lol: "Hello tayyab"
//     });
// })

// app.post('/tayyab', function (req, res) {
//     console.log(req.headers);
//     console.log(req.headers["authorization"]);
//     res.send({
//         name: "Tayyab Khan",
//         age: 21,
//         Education: "MCA"
//     })
// })
app.listen(port);   