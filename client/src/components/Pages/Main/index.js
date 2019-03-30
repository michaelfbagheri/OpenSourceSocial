import React, { Component } from 'react';
import Wrapper from '../../Wrapper';
import Auth from '../../../utils/Auth';
import API from '../../../utils/API';

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      userInfo: [],
    };

    Auth.session().then(user => {
      console.log(user);
      this.setState({
        user: user,
        authenticated: user.authenticated
      });

      this.getProfileInfo(this.state.user.user);
    });
  }

  getProfileInfo(user) {
    console.log(user.id);
    API.getUserInfo(user.id)
      .then(res => this.setState({
        userInfo: res.data
      }))
      .catch(err => console.log(err));
  }


  //logout function
  logoutFunction(event) {
    console.log('inside logout func');
    Auth.logout()
      .then(res => {
        window.location = res.data.redirect;
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {

    if (this.state.authenticated === undefined) {
      return null; // TODO Implement loading gear
    }
    if (!this.state.authenticated) {
      window.location = '/';
      return;
    }
    return (
      <Wrapper
        logout={this.logoutFunction} />
    );
  }
}

export default Main;
