import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.style.scss';


function WorkLink() {

    return (
        <Link to="/work" className="NavLink">
            Work
        </Link>
    )
}

export default WorkLink;