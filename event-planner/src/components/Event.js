import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEventById, deleteEvent } from '../actions/actions';
import { connect } from "react-redux";

import Todos from './Todos';

function Event({ getEventById, deleteEvent, event, match }) {
    console.log("id:", match.params.id);

    useEffect(() => {
        getEventById(match.params.id);
    }, [getEventById]);

    return event.name ? (
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
                <button className="edit-btn">Edit</button>
                <button onClick={() => deleteEvent(match.params.id)} className="delete-btn">Delete</button>
            </div>

            <Todos />
        </div>
    ) : (
        <Link to="/events-home">Back to homepage</Link>
    )

}

const mapStateToProps = (state) => ({
    event: state.event
})

export default connect(
    mapStateToProps,
    { getEventById, deleteEvent }
)(Event);