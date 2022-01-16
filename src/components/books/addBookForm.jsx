import React, { Component } from "react";
import Joi from "joi-browser";
import { getAllAuthors } from "./fakeAuthorService";
import { getBook, saveBook } from "./fakeBookService";

import Form from "./common/form";

export default class AddBookForm extends Form {
  state = {
    data: {
      title: "",
      authorId: "",
      dailyRentalRate: "",
      numberInStock: "",
      about: "",
    },
    authors: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    about: Joi.string().required().label("About"),
    authorId: Joi.string().required().label("Author name"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Daily Rental Rate"),
  };

  componentDidMount() {
    const authors = [...getAllAuthors()];
    this.setState({ authors });
    const { match } = this.props;
    const id = match.params.id;

    const bookId = this.props.match.params.id;
    if (bookId == "new") {
      return;
    }
    const book = getBook(bookId);
    if (!book) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(book) });
  }
  mapToViewModel(book) {
    console.log("----------------------");
    console.log(book);
    return {
      _id: book._id,
      title: book.title,
      authorId: book.author._id,
      numberInStock: book.numberInStock,
      dailyRentalRate: book.dailyRentalRate,
      about: book.about,
    };
  }

  doSubmit = (e) => {
    console.log("Submitted");
    saveBook(this.state.data);
    this.props.history.push("/books");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "text", "Title")}
          {this.renderInput("dailyRentalRate", "text", "Daily Rental Rate")}
          {this.renderInput("numberInStock", "text", "Number In Stock")}
          {this.renderInput("about", "text", "About")}
          {this.renderSelect("authorId", "Author", this.state.authors)}
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}
