import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEventById, deleteEvent, updateEvent } from '../actions/actions';
import { connect } from "react-redux";

import Todos from './Todos';

function Event({ getEventById, deleteEvent, updateEvent, event, match, id }) {
    const [ isUpdating, setIsUpdating ] = useState(false);
    const [updatedEvent, setUpdatedEvent] = useState({
        id: null,
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        location: "",
        budget: ""
    });
    
    console.log("id:", match.params.id);

    useEffect(() => {
        getEventById(match.params.id);
    }, [getEventById]);

    const handleChange = e => {
        e.preventDefault();
        setUpdatedEvent({ ...updatedEvent, [e.target.name]: [e.target.value] });
    }

    return event.name ? (
        <div className="event-page">
            <div className="event-title">
                <h1>{event.name}</h1>
            </div>
                {!isUpdating && (
                <div className="event-card">
                    <p>{`Event Description: ${event.description}`}</p>
                    <p>{`Start Date: ${event.start_date}`}</p>
                    <p>{`End Date: ${event.end_date}`}</p>
                    <p>{`Location: ${event.location}`}</p>
                    <p>{`Budget: ${event.budget}`}</p>
                </div>
                )}
                {isUpdating && (
                    <div className="event-card">
                        <h2>{`${event.name} is being updated`}</h2>
                        <form>
                            <label>Event Name: </label>
                            <input
                                type="text"
                                name="name"
                                value={updatedEvent.name}
                                onChange={handleChange}
                            />
                            <br />
                            <label>Event Description: </label>
                            <input
                                type="text"
                                name="description"
                                value={updatedEvent.description}
                                onChange={handleChange}
                            />
                            <br />
                            <label>Event Start: </label>
                            <input
                                type="text"
                                name="start_date"
                                value={updatedEvent.start_date}
                                onChange={handleChange}
                            />
                            <br />
                            <label>Event End: </label>
                            <input
                                type="text"
                                name="end_date"
                                value={updatedEvent.end_date}
                                onChange={handleChange}
                            />
                            <br />
                            <label>Location: </label>
                            <input
                                type="text"
                                name="location"
                                value={updatedEvent.location}
                                onChange={handleChange}
                            />
                            <br />
                            <label>Budget: </label>
                            <input
                                type="text"
                                name="budget"
                                value={updatedEvent.budget}
                                onChange={handleChange}
                            />
                        </form>
                    </div>
                )}
                
            

            <div className="update-event">
                { isUpdating ? <button onClick={() => setIsUpdating(!isUpdating, updateEvent(updatedEvent, id))} className="save-btn">Save</button>
                    : <button onClick={() => setIsUpdating(!isUpdating)} className="edit-btn">Update Event</button> }
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
    { getEventById, deleteEvent, updateEvent }
)(Event);