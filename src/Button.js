import React from "react";

const Button = ({handleChange, name}) => {
  return (
    <div>
      <button onClick={handleChange}>{name}</button>
    </div>
  );
};

export default Button;
