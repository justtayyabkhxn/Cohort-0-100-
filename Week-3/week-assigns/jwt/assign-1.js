const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require("zod");
const express = require("express");
const app = express();
let token;

app.use(express.json());

const emailSchema = z.string().email();
const passwordSchema = z.string().min(8);

function signJwt(username, password) {
    return token = jwt.sign(username, jwtPassword);
}

app.get("/makeToken", (req, res) => {
    const username = emailSchema.safeParse(req.body.username);
    const password = passwordSchema.safeParse(req.body.password)
    if (!username.success || !password.success)
        return res.send("CHECK EMAIL OR PASSWORD FORMAT");

    res.json({
        token: signJwt(username, password)

    })
})

app.post("/decodeToken", (req, res, next) => {
    const token=req.headers["token"];
    if(jwt.decode(token))
        res.json({
   msg: "Decode Successfull",
   decoded:jwt.decode(token)
})
    else 
        res.json("Decode unsuccesfull!!!");
})

app.post("/verifyToken",(req,res)=>{
    const token=req.headers["token"];
    res.json({
        msg:jwt.verify(token,jwtPassword)
    });

})

function verifyJwt(token) {
    // Your code here
}

function decodeJwt(token) {
    // Your code here
}

app.listen(3000);

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
