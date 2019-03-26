import React, { Component, Fragment } from 'react';
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


  render() {

    if (this.state.authenticated === undefined) {
      return null; // TODO Implement loading gear
    }
    if (!this.state.authenticated) {
      window.location = '/';
      return;
    }
    return (
      <Fragment>
        <section className="row">
          <div className="col-md-4 event-list">left-side</div>
          <div className="col-md-8 event-module">right-side</div>
        </section>
        <section className="row">
          <div className="col-md-12 event-map">Map</div>
        </section>
      </Fragment>
    );
  }
}