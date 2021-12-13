import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select {...rest} className="form-control" id={name} name={name}>
        <option value="">Select Author</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="text-danger"> {error}</div>
    </div>
  );
};

export default Select;
