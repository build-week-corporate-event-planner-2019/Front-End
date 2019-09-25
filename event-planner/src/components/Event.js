import React from 'react';
import { Link } from 'react-router-dom';

import Todos from './Todos';

function Event() {

    return (
        <div className="event-page">
            <div className="event-title">
                <h1>Event Name</h1>
            </div>
            <div className="event-card">
                <p>Event Description</p>
                <p>Date</p>
                <p>Location</p>
                <p>Budget</p>
            </div>

            <div className="update-event">
                <Link className="edit-btn" to="#">Edit</Link>
                <Link className="delete-btn" to="#">Delete</Link>
            </div>

            <Todos />
        </div>
    )

}

export default Event;