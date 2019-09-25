import React, { useEffect } from 'react';
import { getEvents } from '../actions/actions';
import { connect } from "react-redux";


function EventsPage({ getEvents, events }) {
    console.log(events);
    
    useEffect(() => {
        getEvents();
    }, [getEvents]);

    return (
        <div className="events-page">
            <h1>Events</h1>
            <h2>Upcoming Events</h2>
            <div className="events-list">
                <div className="event">

                </div>
            </div>
        </div>

    )
}

const mapStateToProps= (state) => ({
    events: state.events
})

export default connect(
    mapStateToProps,
    { getEvents }
)(EventsPage);