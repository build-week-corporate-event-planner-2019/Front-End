import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEventById, deleteEvent } from '../actions/actions';
import { connect } from "react-redux";

import Todos from './Todos';

function Event({ getEventById, deleteEvent, event, match }) {
    const [ isUpdating, setIsUpdating ] = useState(false);
    
    console.log("id:", match.params.id);

    useEffect(() => {
        getEventById(match.params.id);
    }, [getEventById]);

    // const updateEvent = e => {
    //     e.preventDefault();
    //     // console.log(editedMovie, "<--- Edited Movie")
    //     axiosWithAuth()
    //         .put(`/events/${id}`, updatedEvent)
    //         .then(res => {
    //             setEvent({
    //                 id: null,
    //                 name: "",
    //                 description: "",
    //                 budget: 0,
    //                 location: "",
    //                 start_date: "",
    //                 end_date: ""
    //             });
    //             props.history.push("/");
    //         })
    //         .catch(err => console.error(err.response));
    // };

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
                        <h2>Iam being updated</h2>
                    </div>
                )}

                
                
                <p>{`Event Description: ${event.description}`}</p>
                <p>{`Start Date: ${event.start_date}`}</p>
                <p>{`End Date: ${event.end_date}`}</p>
                <p>{`Location: ${event.location}`}</p>
                <p>{`Budget: ${event.budget}`}</p>
                
            

            <div className="update-event">
                { isUpdating ? <button onClick={() => setIsUpdating(!isUpdating)} className="save-btn">Save</button>
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
    { getEventById, deleteEvent }
)(Event);