import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../actions/actions";
import { connect } from "react-redux";
import AddEvent from "./EventAdd.js";
//import Event from "./Event";

function EventsPage({ getEvents, events }) {
    
    useEffect(() => {
        getEvents();
    }, [getEvents]);

  return (
    <div className="events-page">
      <h1>Events</h1>
      <div className="events-list">
        {events
          .filter(event => {
            console.log(localStorage.getItem("user_id"));
            return event.user_id == localStorage.getItem("user_id");
          })
          .map(event => {
            console.log("event:", event);
            return (
              <Link to={`/event/${event.id}`}>
                <h3>{event.name}</h3>
              </Link>
            );
          })}
      </div>
      <AddEvent />
    </div>
  );
}

// function EventDetails({ event }) {
//     // return (
//     //     <Link to={`/event/${event.id}`}>
//     //         <Event event={event} />
//     //     </Link>
//     );
// }

const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps,
  { getEvents }
)(EventsPage);
