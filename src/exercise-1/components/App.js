import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
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
          <Switch>
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
            <Route path="/goods">
              <Redirect to="/products" />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
