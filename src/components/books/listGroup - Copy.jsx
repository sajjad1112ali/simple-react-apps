import React, { Component } from "react";
import { getAllAuthors } from "./fakeAuthorService";

class ListGroup extends Component {
  state = {
    authors: getAllAuthors(),
    activeAuthor: "all",
  };

  handleAuthorClick = (author) => {
    console.log(author);
    this.setState({
      activeAuthor: author,
    });
  };

  render() {
    const { activeAuthor, authors } = this.state;
    return (
      <ul className="list-group">
        <li
          key="aurhot._id"
          className={
            activeAuthor === "all"
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          All Authors
        </li>
        {authors.map((author) => (
          <li
            key={author._id}
            onClick={() => {
              this.handleAuthorClick(author.name);
            }}
            className={
              activeAuthor === author.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {author.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
