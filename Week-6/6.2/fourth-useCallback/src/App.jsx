import { useState } from "react";

function App() {
  const [count,setCount] = useState(0);

  function printsomething() {
    console.log("hellllooooo");
  }
  return (
    <>
      <center>
        <ButtonComponent inputfn={printsomething} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </center>
    </>
  );
}
const ButtonComponent = ({ inoutfn }) => {
  console.log("cild render");
  return (
    <div>
      <button onClick={inoutfn}>Button Clicked</button>
    </div>
  );
};

export default App;
