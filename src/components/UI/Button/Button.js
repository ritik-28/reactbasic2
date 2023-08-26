import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${!props.isValid ? "button-submit" : "button"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
