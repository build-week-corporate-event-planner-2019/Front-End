import React, { useEffect } from 'react';
import { getEventById } from '../actions/actions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import Todos from './Todos';

function Event({ getEventById, event, match }) {
    console.log("Here's the event", event);

    useEffect(() => {
        getEventById(match.params.id);
    }, [getEventById]);

    return (
        <div className="event-page">
            <div className="event-title">
                <h1>{event.name}</h1>
            </div>
            <div className="event-card">
                <p>{`Event Description: ${event.description}`}</p>
                <p>{`Start Date: ${event.start_date}`}</p>
                <p>{`End Date: ${event.end_date}`}</p>
                <p>{`Location: ${event.location}`}</p>
                <p>{`Budget: ${event.budget}`}</p>
            </div>

            <div className="update-event">
                <Link className="edit-btn" to="#">Edit</Link>
                <Link className="delete-btn" to="#">Delete</Link>
            </div>

            <Todos />
        </div>
    )

}

const mapStateToProps = (state) => ({
    event: state.event
})

export default connect(
    mapStateToProps,
    { getEventById }
)(Event);