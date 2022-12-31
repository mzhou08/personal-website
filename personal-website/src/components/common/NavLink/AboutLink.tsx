import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.style.scss';

function AboutLink() {

    return (
        <Link to="\about" className="NavLink">
            About
        </Link>
    )
}

export default AboutLink;