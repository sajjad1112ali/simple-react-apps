import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./books/common/form";
export default class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    name: Joi.string().required().min(5).label("Name"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = (e) => {
    console.log("Submitted");
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "email", "Username")}
          {this.renderInput("name", "text", "Name")}
          {this.renderInput("password", "password", "Password")}

          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}
