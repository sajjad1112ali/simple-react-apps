import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BooksList from "./components/books/booksList";
import AboutUs from "./components/aboutUs";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./App.css";
import BookDetails from "./components/books/bookDetails";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import AddBookForm from "./components/books/addBookForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            {/* <Route path="/book/:id" component={BookDetails}></Route> */}
            <Route path="/books/:id" component={AddBookForm}></Route>
            <Route path="/books" component={BooksList}></Route>

            <Route path="/about-us" component={AboutUs}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/books"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
