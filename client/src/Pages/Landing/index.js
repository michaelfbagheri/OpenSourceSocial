import React, { Component } from 'react';
import {Modal, Card, Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
const StyleDiv = {
  border: 'solid 2px black'
};

class Landing extends Component {


  render() {
    return (
       <Grid container xs={12} m={2}> 
       <Grid item>
       <div steyle={StyleDiv}>test</div>
       </Grid>
          </Grid>
      
    );
  }

}

export default Landing;
