import React from 'react';
import { Link } from 'react-router-dom';

import Login from "./Login";

const Home = () => {
    return (
        <>
            <button>
                <Link to="">Sign Up</Link>
            </button>
            <Login />
        </>
    )
}

export default Home;