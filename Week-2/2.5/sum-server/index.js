const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

function findSum(n) {
    let ans = 0;
    for (let i = 1; i < n; i++)
        ans =ans+ i;
    return ans;
}

app.get("/", function (req, res) {
    const n = req.query.n;
    const ans = findSum(n);
    // res.send(ans.toString());
    res.send(`The sum is ${ans} for the value of n as ${n}`)
    
})

app.listen(port);