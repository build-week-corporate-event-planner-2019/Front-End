import React from "react";
import EventCard from "./EventCard";
import EventMainSection from "./EventMainSection";
import EventsPage from './EventsPage';
//import { Link } from 'react-router-dom';

const EventsHome = () => {
  return (
    <div className="events-home-wrapper">
      <p>Events Page</p>
      <EventCard />
      <EventsPage />
      <EventMainSection />
    </div>
  );
};

export default EventsHome;
