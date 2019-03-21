import React, { Component } from 'react';
import {Modal, Card, Button, Paper} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  paper:  {
    border: 'solid 2px black',
    padding: '10px',
    margin: '20px',
  },
  textField: {
    padding: '5px',
    width: '100%',
  },
  button: {
    width: '100%',
  }
};

class Landing extends Component {

    state = {
      name: '',
      password: '',
    };
  
  handleChange = name => event => {
    console.log(name)
    this.setState({
      [name]: event.target.value,
    });
    console.log("name: " + this.state.name);
    console.log("password: " + this.state.password);
  };

  render() {
    return (
        <Grid container> 
          <Grid item xs={12} sm={4} md={3} >
            <Paper style={styles.paper}>
            <form>
            <TextField
          id="outlined-name"
          label="userName"
          style={styles.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
     <TextField
          id="outlined-name"
          label="password"
          style={styles.textField}
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
          variant="outlined"
        />
            <Button
            style={styles.button}
            >Login</Button>
            </form>
            </Paper>
       
          </Grid>
        </Grid>
      
    );
  }

}

export default Landing;
