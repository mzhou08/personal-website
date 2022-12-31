import React from 'react';

import HomeLink from '../NavLink/HomeLink';
import AboutLink from '../NavLink/AboutLink';
import ProjectsLink from '../NavLink/ProjectsLink';
import WorkLink from '../NavLink/WorkLink';

// import './NavBar.style.scss';

function NavBar () {
    return (
     <div>
        <HomeLink />
        <AboutLink />
        <ProjectsLink />
        <WorkLink />
     </div>
    );
}

export default NavBar;