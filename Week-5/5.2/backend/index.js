const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors=require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/newtodo", async (req, res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (parsedPayLoad.success != true) {
        res.json({
            msg: "Invalid input"
        });
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        status: false
    })
    res.json({
        msg: "Todo has been succesfully created!"
    })

})

app.get("/todos", async (req, res) => {
    const allTodos = await todo.find({});
    res.json({
        todos: allTodos
    })
    console.log(allTodos);
})

app.put("/completed", async (req, res) => {
    const completedPayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(completedPayLoad);
    if (!parsedPayLoad.success) {
        res.json({
            msg: "Invalid Input"
        });
        return;
    }
    
    await todo.updateOne({
        _id: req.body.id
    }, {
        status: true
    })
    res.json({
        msg: "Todo is marked as complete"
    })

})
app.listen(3000);