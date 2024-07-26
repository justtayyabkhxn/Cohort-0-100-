const express = require('express');
const mongoose=require("mongoose")
const bodyParser = require('body-parser');
const app = express();
// mongoose.connect("mongodb+srv://tayyabk2002:se6bSeGerC1yZsV6@cluster0.w1qpdsc.mongodb.net/newcourseDB");
app.use(express.json());
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
