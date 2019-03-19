import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const styles = {
  card: {
    Width: '100%',
    minHeight: '400px',
    // maxWidth: '275px',
    border: 'solid blue 1px',
    // position: 'fixed',
    // left: '0px',

  },
  title: {
    fontSize: '14px',
  },
  post: {
    marginBottom: '15px',
  },
};


const PartyInfo = (props) => {
  return (
    <Card style={styles.card}>
      <CardContent>
        <Button>Search</Button>
      </CardContent>
    </Card>

  );
};

export default PartyInfo;
