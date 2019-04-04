import React, { Component, Fragment } from 'react';

import Auth from '../../../utils/Auth';
import { config } from '../../../config/Config';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import API from '../../../utils/API';
import './style.css';



class SearchSection extends Component {

    state = {
        search: '',
        events: [],
    };

    componentDidMount() {
        this.retrieveEvents();

    }


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


    retrieveEvents = (event) => {
        console.log('inside retrieveEvents and brought with us' + this.state.search);
        API.allEvents()
            .then(res => {
                console.log(res.data)
                this.setState({
                    events: res.data
                })
            })
            .catch(err => console.log(err));



    }


    render() {
        return (
            <Fragment>
                <input
                    className='input-search'
                    placeholder='Search Event Keyword'
                    name='search'
                    label='search'
                    value={this.state.search}
                    onChange={this.handleInputChange}

                ></input>
                <button
                    onClick={this.retrieveEvents}>
                    Search Events
                </button>
                <section>
                    {this.state.events.map(event => (

                        <div
                            className="row event-card card"
                            key={event._id}>
                            {event.eventName}
                        </div>
                    ))}
                </section>
            </Fragment>
        );
    };
};

//mapStateToProps will import the props on this page from initialState-Redux
const mapStateToProps = state => {
    return {
        state: state.events
    };
};

//mapDispatchToProps will call on the Reducer functions in order to set initialState-Redux
const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);


