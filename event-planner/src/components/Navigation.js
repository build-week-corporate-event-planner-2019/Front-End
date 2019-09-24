import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (

        <div>
            <div className="navigation">
                <h1>Event Planner App</h1>
                <div>
                    <Link to='/'>Log-in</Link>
                </div>
                <div>
                    <Link to='/events-page'>Upcoming Events</Link>
                </div>
                <div>
                    <Link to='/sign-up'>Sign-Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;