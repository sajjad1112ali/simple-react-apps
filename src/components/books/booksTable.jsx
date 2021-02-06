import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class BooksTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "author.name", label: "Author" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (book) => (
        <Like
          liked={book.liked}
          onLike={() => {
            this.props.onLike(book);
          }}
        />
      ),
    },
    {
      key: "delete",
      content: (book) => (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.props.onDelete(book._id);
          }}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { books, onSort, sortColumn } = this.props;
    return (
      <Table
        sortColumn={sortColumn}
        columns={this.columns}
        onSort={onSort}
        data={books}
      />
    );
  }
}

export default BooksTable;
