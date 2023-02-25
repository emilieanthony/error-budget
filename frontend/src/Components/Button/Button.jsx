import React from "react";
import "./Button.css";

const Button = ({ onClick, type, children, variant }) => {
  return (
    <button onClick={onClick} type={type} className={variant}>
      {children}
    </button>
  );
};

export default Button;
