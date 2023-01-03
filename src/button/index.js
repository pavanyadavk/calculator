import React from "react";
import "./button.css";

const Button = (props) => {
  const { name = "", onClick = {}, className = "" } = props;
  return (
    <button
      className={className ? className : ""}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Button;
