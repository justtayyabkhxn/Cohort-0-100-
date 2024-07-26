import { useState } from "react"

export function CreateTodo(){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    return <div>
        <br /><br />
        <input type="text" name="" id="" placeholder="title" onChange={function (e){
            setTitle(e.target.value);
        }}/>
        <br /><br />
        <input type="text" name="" id="" placeholder="description" 
        style={{
            padding:50
        }} onChange={function (e){
            setDescription(e.target.value);
        }}/>
        <br />
        <button style={{
            padding:10,
            margin:20 
        }} onClick={()=>{
            fetch("http://localhost:3000/newtodo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
                alert("todo Added");
            })
        }}>Add a todo</button>
    </div>
}