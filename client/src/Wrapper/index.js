import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartyInfo from '../components/PartyInfo';
import Grid from '@material-ui/core/Grid';

const styleContainer = {
  padding: '5px 10px',
};

class Wrapper extends Component {

  render() {

    return (
      <Fragment>
        <Navbar></Navbar>
        <Grid container spacing={24} style={styleContainer}>
          <Grid item xs={12} sm={6} md={4}>
            <PartyInfo></PartyInfo>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <div>Calender planner placeholder</div>
          </Grid>
          <Grid item xs={12}>
            <div>map placeholder</div>
          </Grid>
        </Grid>
        <Footer></Footer>
      </Fragment>
    );
  }


}

export default Wrapper;
