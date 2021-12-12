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

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/books/:id" component={BookDetails}></Route>
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
