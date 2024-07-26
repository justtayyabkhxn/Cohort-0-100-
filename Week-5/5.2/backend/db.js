const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://tayyabk2002:se6bSeGerC1yZsV6@cluster0.w1qpdsc.mongodb.net/todos");

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    status:Boolean
})

const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}