import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Pages/Landing";
import { Main } from "./components/Pages/Main";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <main className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/main" component={Main} />
              </Switch>
          </main>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
