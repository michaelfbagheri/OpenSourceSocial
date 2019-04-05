import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Pages/Landing';
import Main from './components/Pages/Main';
import Auth from './utils/Auth';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    // check user auth any time the app is loaded
    Auth.session().then(user => {
      //set the User object inside within Redux InitialState (if not logged in backend will return Null)
      console.log(user);
      this.props.setUser(user);
      console.log(user);
    });
  }
  render() {
    console.log('before returning app this.props.user =' + this.props.user.authenticated);
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/main' component={Main} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch({ type: 'LOGIN', payload: user })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



