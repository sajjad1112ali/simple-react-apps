import React, { Component } from "react";
import Input from "./books/common/input";
export default class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: { username: "", password: "" },
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };
  // Input change event
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") {
        return "User name is required";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "Password is required";
      }
    }
  };
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  //FOrm submit event
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            type="email"
            label="User Name"
            value={account.username}
            onChange={this.handleChange}
            autoFocus="true"
            error={errors.username}
          />

          <Input
            name="password"
            type="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
