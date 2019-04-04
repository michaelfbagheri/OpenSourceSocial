import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './style.css';





class CalenderView extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <section>
                <Calendar
                    className="calendar"
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </section>
        );
    }
}

export default CalenderView;
