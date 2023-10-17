import { useState } from "react";
import "./App.css";

function App() {
  const [width, setWidth] = useState("0");
  const [height, setHeight] = useState("0");

  const handleClick = () => {
    const box = document.getElementById("box");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
  };

  return (
    <>
      <div>
        <label>Width </label>
        <input name="width" type="text" onChange={(e) => setWidth(e.target.value)} />
      </div>
      <div>
        <label>Height </label>
        <input name="height" type="text" onChange={(e) =>setHeight(e.target.value)} />
      </div>

      <button onClick={handleClick}>Change</button>

      <div id="box" style={{ background: "black", margin: "1rem 0",width:50,height:50}} ></div>
    </>
  );
}

export default App;
