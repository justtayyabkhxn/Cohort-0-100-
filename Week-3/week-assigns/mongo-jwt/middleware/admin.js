const {secret}=require("../config");
const jwt=require("jsonwebtoken")
function userMiddleware(req, res, next) {
    
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,secret);
    if(decodedValue.username){
        next();
    }
    else{ 
        res.jsong({
            msg:"You are not authorised"
        })
    }
}

module.exports = userMiddleware;