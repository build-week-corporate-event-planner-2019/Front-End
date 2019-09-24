import React from "react";
import EventInfoBlock from "./EventInfoBlock";
import EventMainSection from "./EventMainSection";
//import { Link } from 'react-router-dom';

const EventsHome = () => {
  return (
    <div className="events-home-wrapper">
      <p>Events Page</p>
      <EventInfoBlock />
      <EventMainSection />
    </div>
  );
};

export default EventsHome;
