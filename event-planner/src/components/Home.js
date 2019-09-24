import React from 'react';
import { Link } from 'react-router-dom';

import Login from "./Login";

const Home = () => {
    return (
        <div className="home-wrapper">
            <h1>Event Planner App</h1>
            <div className="login-container">
                <Login />
                <button className="sign-up">
                    <Link to="">Sign Up</Link>
                </button>
            </div>
        </div>
    )
}

export default Home;