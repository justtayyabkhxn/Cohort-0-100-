import "./App.css";
import { useState } from "react";
let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go gym",
      description: "Please go gym",
    },
    {
      id: 2,
      title: "Go gym",
      description: "Please go gym",
    },
    {
      id: 3,
      title: "Go gym",
      description: "Please go gym",
    },
  ]);

  function addtodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }
  return (
    <div>
      <button onClick={addtodo}>Add a todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}
export default App;
