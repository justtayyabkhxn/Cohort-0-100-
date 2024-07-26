import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 2000);
  }, []);

  return (
    <div>
      {todos.length}
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
