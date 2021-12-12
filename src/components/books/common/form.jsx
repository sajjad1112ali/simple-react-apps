import React, { Component } from "react";
import Input from "./input";

import Joi from "joi-browser";

export class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  //Form submit event
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  // Input change event
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  // Render form button
  renderButton = (label) => {
    return (
      <button
        type="submit"
        disabled={this.validate()}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };
  // Render form input
  renderInput = (name, type = "text", label) => {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        type={type}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
