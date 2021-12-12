import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input {...rest} className="form-control" id={name} name={name} />
      <div className="text-danger"> {error}</div>
    </div>
  );
};

export default Input;
