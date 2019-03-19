import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Wrapper extends Component {

  render() {

    return (
      <Fragment>
        <Navbar></Navbar>{this.props.children}
        <Footer></Footer>
      </Fragment >
    );
  }


}

export default Wrapper;
