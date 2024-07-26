const btn=document.getElementById("btn");
const titleBox=document.getElementById("titleBox");
const descriptionBox=document.getElementById("descriptionBox");
var taskCount=0;

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tayyabk2002:se6bSeGerC1yZsV6@cluster0.w1qpdsc.mongodb.net/Tasks");

const User = mongoose.model("Tasks", {
    title: String, description: String, password: String
});


function addTask(){
    const newTitle=titleBox.value;
    taskCount++;
    const newDescription=descriptionBox.value;
    const taskContainer=document.getElementById("listContainer");
    const newTask=document.createElement("div");
    const taskDB={
        title:newTitle,
        description:newDescription
    }
    taskDB.save().then(console.log("Done"+taskDB));
    newTask.innerHTML=`
                        </br>
                        <h3>Task #${taskCount}</h3>
                        </br>
                        <div id="${newTitle}">Title: ${newTitle}</div>    
                        </br>
                        <div id="${newDescription}">Description ${newDescription}</div> 
                        </br>
                        <button> Mark as Done </button>   
    `;

    taskContainer.appendChild(newTask);
}
