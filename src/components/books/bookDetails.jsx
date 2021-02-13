import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getBook } from "./fakeBookService";

class BookDetails extends Component {
  state = {
    book: null,
  };
  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2];
    console.log(this.props.location);
    this.setState({ book: getBook(id) });
  }
  render() {
    if (!this.state.book) return <h1>Book not found</h1>;
    const { book } = this.state;
    return (
      <React.Fragment>
        <h1>
          {book.title}
          <small class="text-muted">({book.author.name})</small>
        </h1>
        <h3 className="text-secondary">About Book</h3>
        <p>{book.about}</p>
      </React.Fragment>
    );
  }
}

export default BookDetails;
