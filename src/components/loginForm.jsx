import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./books/common/form";
export default class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: { username: "", password: "" },
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = (e) => {
    console.log("Submitted");
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "email", "User name")}
          {this.renderInput("password", "password", "Password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}
