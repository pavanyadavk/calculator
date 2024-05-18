import React from "react";
import Button from "../button";
import "./calcKeyboard.css";

const CalcKeyboard = ({ handleClick = {} }) => {
  return (
    <div className="calcKeyboard">
      <div className="btnRow">
        <Button name="CE" onClick={handleClick} />
        <Button name="Clear" onClick={handleClick} />
        <Button name="/" onClick={handleClick} />
        <Button name="*" onClick={handleClick} />
      </div>
      <div className="btnRow">
        <Button name="7" onClick={handleClick} />
        <Button name="8" onClick={handleClick} />
        <Button name="9" onClick={handleClick} />
        <Button name="-" onClick={handleClick} />
      </div>
      <div className="btnRow">
        <Button name="4" onClick={handleClick} />
        <Button name="5" onClick={handleClick} />
        <Button name="6" onClick={handleClick} />
        <Button name="+" onClick={handleClick} />
      </div>
      <div className="btnRow">
        <Button name="1" onClick={handleClick} />
        <Button name="2" onClick={handleClick} />
        <Button name="3" onClick={handleClick} />
        <Button name="." onClick={handleClick} />
      </div>
      <div className="btnRow">
        <Button name="0" onClick={handleClick} />
        <Button name="=" onClick={handleClick} />
      </div>
    </div>
  );
};

export default CalcKeyboard;
