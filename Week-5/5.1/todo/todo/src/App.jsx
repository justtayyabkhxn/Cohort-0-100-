import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{
    title:"Buy veggies",
    description:"But potato,tomato,onion,garlic",
    completed:false
  },{
    title:"Complete order",
    description:"Complete nishit order of 209k views",
    completed:true
  }
]);
  function addTodo(){
      setTodos([...todos,{
        title:"New todo",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dolores, sed veritatis pariatur odit quos earum reprehenderit temporibus aliquid, dolorum expedita nisi soluta ullam repudiandae quam ipsam. Molestiae, error ad.",
        completed:true
      }])
  }
  return (
    <div>
        <button onClick={addTodo}>Add a Todo</button>
        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}></Todo>
        })}
    </div>
  )
}

function Todo(props){
  return  <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
