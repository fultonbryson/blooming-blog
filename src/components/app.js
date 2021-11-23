import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home";
import Header from "./header";
import Create from "./create";
import BlogDetails from "./blogDetails";
import NotFound from "./notFound";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Header />
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route path='/create'>
                <Create />
              </Route>

              <Route path='/blogs/:id'>
                <BlogDetails />
              </Route>

              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
