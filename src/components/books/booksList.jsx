import React, { Component } from "react";
import { getBooks } from "./fakeBookService";
import { getAllAuthors } from "./fakeAuthorService";
import Pagination from "./common/pagination";
import { paginate } from "../../utils/paginate";
import BooksTable from "./booksTable";
import ListGroup from "./listGroup";

import _ from "lodash";

export class BooksList extends Component {
  state = {
    books: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    authors: [],
  };

  componentDidMount() {
    const authors = [{ name: "All Books", _id: "" }, ...getAllAuthors()];

    this.setState({
      books: getBooks(),
      authors,
    });
  }
  handleDelete = (id) => {
    const books = this.state.books.filter((book) => book._id !== id);
    this.setState({
      books: books,
    });
  };

  handleLike = (book) => {
    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index] = { ...books[index], liked: !books[index].liked };
    this.setState({
      books: books,
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleAuthorSelect = (author) => {
    this.setState({ selectedAuthor: author, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  getPageData = () => {
    let {
      books: allBooks,
      pageSize,
      currentPage,
      sortColumn,
      selectedAuthor,
    } = this.state;

    const filtered =
      selectedAuthor && selectedAuthor._id
        ? allBooks.filter((book) => book.author._id === selectedAuthor._id)
        : allBooks;

    const count = filtered.length;

    const sort = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const books = paginate(sort, currentPage, pageSize);
    return { count, books };
  };

  render() {
    let {
      books: allBooks,
      pageSize,
      currentPage,
      sortColumn,
      selectedAuthor,
    } = this.state;

    const { count, books } = this.getPageData();
    if (count === 0) return <p>Books not found in database</p>;

    return (
      <div className="row pt-3">
        <div className="col-3">
          <ListGroup
            authors={this.state.authors}
            onAuthorSelect={this.handleAuthorSelect}
            selectedAuthor={this.state.selectedAuthor}
          />
        </div>
        <div className="col-9">
          <p>Showing {count} books in the database</p>
          <BooksTable
            books={books}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default BooksList;
