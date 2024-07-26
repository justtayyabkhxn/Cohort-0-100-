const express = require("express");
const port = 3000;
const app = express();
//-------> dumb way of doing authentication
// app.get("/auth", (req, res) => {
//     const lol=req.headers.lol;
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyCount = req.query.kidneyCount;
//     console.log("lol "+lol);
//     console.log("user "+username);
//     console.log("pass "+password);
//     if (username != "justtayyabkhan" || password != "123") {
//         res.status(404).send("Invalid User!");
//         return;
//     }
//     else {
//         if (kidneyCount > 2 || kidneyCount == 0) res.status(403).send("Invalid Kidney Count");
//         else if (kidneyCount == 1) res.status(200).send("Grow some kidneys dude");
//         else res.status(200).send("Hello Mr perfect");
//     }

// })


//---------> using middlewares

function validateUser(req, res, next) {
    const username=req.headers.username;
    const password=req.headers.password;
    if (!(username == "justtayyabkhan" && password == "123")) {
        res.status(403).send("Invalid User");
    }
    else {
        next();
    }

}

function validateKidney(req,res,next){
    const kidneyCount=req.query.kidneyCount;
    if(!(kidneyCount==1 || kidneyCount==2)){
        res.status(403).json("Inavlid kidney count");
    }
    else {
        next();
    }
}

app.get("/auth",validateUser,validateKidney,(req,res)=>{
    res.send("Everything Successfull");
})
app.listen(port);