import React from 'react';
import { Link } from 'react-router-dom';


function Event() {


    return (

        <div className="event">
            <h4>Event Name</h4>
            <p>Date</p>
            <p>Location</p>
            <p>Budget</p>
            <Link to="#">View Event</Link>

        </div>
    )
}

export default Event;