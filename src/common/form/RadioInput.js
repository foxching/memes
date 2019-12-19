import React from "react";

const RadioInput = ({ input, type, label, width, ...custom }) => {
  return (
    <label className="radio-inline">
      <input type={type} {...input} {...custom} />
      {label}
    </label>
  );
};

export default RadioInput;
