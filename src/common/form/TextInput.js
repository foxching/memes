import React from "react";

const TextInput = ({
  input,
  type,
  width,
  placeholder,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <div className="row">
      <div className={`form-group col-md-${width}`}>
        <input
          type={type}
          className="form-control"
          {...input}
          {...custom}
          placeholder={placeholder}
        />
        {touched && error && <small>{error}</small>}
      </div>
    </div>
  );
};

export default TextInput;
