import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(1);
  let mycount=useMemo(()=>{
    let finalCount=0;
    for(let i=1;i<=sum;i++){
        finalCount=finalCount+i;
    }
      return finalCount;
  },[sum]);
  return (
    <>
      <div>
        <center>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <input
            type="number"
            onChange={function (e) {
              const val = Number(e.target.value);
              setSum(val);
            }} placeholder="Enetr numebr"
          />
          <h3>{mycount}</h3>
        </center>
      </div>
    </>
  );
}

export default App;
