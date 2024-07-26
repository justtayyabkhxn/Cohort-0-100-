const express = require("express");
const z = require("zod");

const app = express();
const port = 3000;

app.use(express.json());

const validateUser = (obj) => {
    const schema = z.object({
        email: z.string().email(),
        pass: z.string().min(8)
    });
    const response = schema.safeParse(obj);
    return response.success;
}

app.post("/userpass", (req, res) => {
    // const email=req.body.email;
    // const pass=req.body.pass;
    const obj = req.body;
    const response = validateUser(obj);
    if (response) res.json({
        msg: "Valid User! Login Success"
    });
    else res.json({
        msg: "Invalid User! Login Denied"
    });
})

app.listen(port);