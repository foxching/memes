import React from "react";

const Textarea = ({
  input,
  type,
  rows,
  placeholder,
  meta: { touched, error, invalid },
  ...custom
}) => {
  return (
    <div className="form-group">
      <label>Tell us about yourself</label>
      <textarea
        type={type}
        {...input}
        {...custom}
        className="form-control"
        rows={rows}
        placeholder={placeholder}
      />
      {touched && error && <small>{error}</small>}
    </div>
  );
};

export default Textarea;
