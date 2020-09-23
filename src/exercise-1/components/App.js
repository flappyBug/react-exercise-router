import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import MyProfile from "./MyProfile";
import About from "./About";
import Header from "./Header";
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
