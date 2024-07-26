import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todoId,setTodoId]=useState(1);
  return (
    <center>
      <input type="number"  onChange={(e)=>{
       if(e.target.value) 
          setTodoId(e.target.value)
        else
          setTodoId(1)
      }}/>
      <br /><br />
      <button onClick={()=>{
         setTodoId(1);
      }}>1</button>
      <button onClick={()=>{
         setTodoId(2);
      }}>2</button>
      <button onClick={()=>{
         setTodoId(3);
      }}>3</button>
      <button onClick={()=>{
         setTodoId(4);
      }}>4</button>
      <Todo id={todoId} />
    </center>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}



export default App;
