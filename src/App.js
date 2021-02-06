import React, { Component } from "react";
import "./App.css";

import BooksList from "./components/books/booksList";

class App extends Component {
  render() {
    return (
      <main className="container">
        <BooksList />
      </main>
    );
  }
}

export default App;
