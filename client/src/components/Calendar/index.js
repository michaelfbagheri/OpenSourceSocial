import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Card } from '@material-ui/core';

const styleCalendar = {
    width: '100%',
    height: '40vh',
};

class CalenderView extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <Card>
                <Calendar
                    style={styleCalendar}
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </Card>
        );
    }
}

export default CalenderView;
