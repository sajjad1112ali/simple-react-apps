import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getBook } from "./fakeBookService";

class BookDetails extends Component {
  state = {
    book: null,
  };
  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    this.setState({ book: getBook(id) });
  }
  render() {
    const { history } = this.props;
    if (!this.state.book) return <h1>Book not found</h1>;
    const { book } = this.state;
    return (
      <React.Fragment>
        <h1>
          {book.title}
          <small className="text-muted">({book.author.name})</small>
        </h1>
        <h3 className="text-secondary">About Book</h3>
        <p>{book.about}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            history.push("/books");
          }}
        >
          Back
        </button>
      </React.Fragment>
    );
  }
}

export default BookDetails;
