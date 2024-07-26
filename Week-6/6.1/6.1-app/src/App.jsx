import {useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [title,setTitle]=useState("This gets updated: ");
  function updateTitle(){
    setTitle("This gets updated: "+Math.random());
  }
  return (
    <div>
      <center>
        <Header title="Tayyab Khan"></Header>
        <button onClick={updateTitle}>Click Me to Update</button>
        <h2>{title}</h2>
        <h2>This does not gets updated</h2>
        </center>
    </div>
  );
}

const Header=React.memo(function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
})

export default App;
