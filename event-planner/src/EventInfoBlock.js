import React from 'react';
import { Link } from 'react-router-dom';

function EventInfoBlock() {

    return (
        <div className="event-page">
            <div className="info-block">
                <p>Event Description</p>
                <p>Date</p>
                <p>Location</p>
                <p>Budget</p>

            </div>

            <div className="event-title">
                <h1>Event Name</h1>
            </div>

            <div className="update-block">
                <Link className="edit-btn" to="#">Edit</Link>
                <Link className="delete-btn" to="#">Delete</Link>

            </div>
        </div>
    )

}

export default EventInfoBlock;