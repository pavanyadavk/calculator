import React, { useState } from "react";
import CalcDisplay from "./calcDisplay";
import CalcKeyboard from "./calcKeyboard";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [inputValues, setInputValues] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case "Clear":
        setInputValues("");
        setResult("");
        break;

      case "CE":
        setInputValues((prevValue) => prevValue.slice(0, -1));
        break;

      case "=":
        setResult(eval(inputValues));
        break;

      default:
        setInputValues((prevValue) => prevValue + value);
        break;
    }
  };
  console.log("inputValues  ::  ", inputValues);
  console.log("result  ::  ", result);
  return (
    <div className="App">
      <div className="calcCard">
        <CalcDisplay inputValues={inputValues} result={result} />
        <CalcKeyboard handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
