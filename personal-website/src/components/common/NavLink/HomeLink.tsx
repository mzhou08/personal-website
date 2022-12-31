import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.style.scss';


function HomeLink() {

    return (
        <Link to="/" className="NavLink">
            Home
        </Link>
    )
}

export default HomeLink;