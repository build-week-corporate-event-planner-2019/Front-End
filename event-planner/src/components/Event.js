import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function Event() {


    return (

        <div className="event">

            <Card className="event-card">
                <CardTitle>Event Name</CardTitle>
                <CardText>Date:</CardText>
                <CardText>Location:</CardText>
                <CardText>Budget:</CardText>
                <Button className="event-btn">View Event</Button>
            </Card>

        </div>
    )
}

export default Event;