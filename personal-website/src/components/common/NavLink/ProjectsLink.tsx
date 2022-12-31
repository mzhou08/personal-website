import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.style.scss';


function ProjectsLink() {

    return (
        <Link to="/projects" className="NavLink">
            Projects
        </Link>
    )
}

export default ProjectsLink;