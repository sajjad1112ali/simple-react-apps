import React from "react";

const Input = ({ name, type, label, value, error, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="text-danger"> {error}</div>
    </div>
  );
};

export default Input;
