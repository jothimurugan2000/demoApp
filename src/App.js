
import { useState } from "react";
// import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const changeData = (e) => {
    setInput(e.target.value);
  };

  const change = () => {
    setData([...data, input]);
    setInput("");
  };

  return (
    <>
      <input type="text" value={input} onChange={(e) => changeData(e)} />
      <button onClick={change}>Add</button>
      {data.map((data) => (
        <li>{data}</li>
      ))}
    </>
  );
}

