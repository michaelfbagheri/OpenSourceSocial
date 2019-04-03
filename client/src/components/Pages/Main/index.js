import React, { Component, Fragment } from 'react';
import Wrapper from '../../Wrapper';
import Auth from '../../../utils/Auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Main extends Component {


  //logout function
  logoutFunction = (event) => {
    event.preventDefault();
    console.log('inside logout func');
    Auth.logout()
      .then(res => {
        //set initialState-Redux using below function call within "mapDispatchToProps"
        this.props.logoutUser();
      })
      .catch(err => {
        console.log(err);
        // this.props.setUser(null);
      });
  }


  render() {
    return (
      <Fragment>
        {this.props.user.authenticated ? (
          <Wrapper logout={this.logoutFunction} />
        ) : (
            <Redirect to='/' />
          )}
      </Fragment>
    );
  }
}



//maps the initialState-Redux to props being used within this class
const mapStateToProps = state => {
  return {
    user: state.user
  };

};

//dispatch calls to Redux in order to set initialState when logged in and logged out based upon below functions
const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch({ type: 'LOGIN', payload: user }),
    logoutUser: () => dispatch({ type: 'LOGOUT' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

// export default Main;
