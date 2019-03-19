import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import Wrapper from './../../Wrapper';

import MapView from '../../components/MapView';
import Calendar from '../../components/Calendar';
import PartyInfo from '../../components/PartyInfo';
import Grid from '@material-ui/core/Grid';

const styleContainer = {
  padding: '5px 10px',
};

class Main extends Component {

  render() {
    return (
      <Wrapper>
        <Grid container spacing={24} style={styleContainer}>
          <Grid item xs={12} sm={2}>
            <PartyInfo></PartyInfo>
          </Grid>
          <Grid item xs={12} sm={8} style={{ position: 'auto', margin: '' }}>
            <Card>
              <div style={{ float: 'right' }}>
                <Calendar></Calendar>
              </div>
              <div>test</div>
            </Card>
            <Card>
              <MapView></MapView>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }

}

export default Main;