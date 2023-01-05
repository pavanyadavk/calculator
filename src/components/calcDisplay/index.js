import React from "react";
import "./calcDisplay.css";

const CalcDisplay = ({ inputValues = "", result = "" }) => {
  return (
    <div className="calcDisplay">
      <h1 className="calc">{inputValues}</h1>
      <h1 className="result">
        {!result
          ? 0
          : result % 1 === 0
            ? result
            : parseFloat(result).toFixed(2)}
      </h1>
    </div>
  );
};

export default CalcDisplay;
