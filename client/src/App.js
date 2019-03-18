import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import Main from './Pages/Main';




class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/main' component={Main} />
        </Switch>
      </Router>
    );
  }
}


export default App;
