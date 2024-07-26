import { useState,useEffect } from "react";
import "./App.css";

function App() {

  useEffect(function(){
    alert("hi")
  },[])
  return (
    <>
      <CardWrapper>
      <TextComponent/>
      </CardWrapper>
    </>
  );
}

function TextComponent() {
  return <div>
  Hi there
  </div>;
}

function CardWrapper({children}) {
  return  <div style= {{border: "2px solid black",padding:50}}>
    {children}
  </div>
    
}
export default App;
