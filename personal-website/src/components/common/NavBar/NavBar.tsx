import React from 'react';
import HomeButton from '../NavButtons/HomeButton';
import AboutButton from '../NavButtons/AboutButton';
import ProjectsButton from '../NavButtons/ProjectsButton';
import WorkButton from '../NavButtons/WorkButton';

function NavBar () {
    return (
     <>
     <div>
        <HomeButton />
        <AboutButton />
        <ProjectsButton />
        <WorkButton />
     </div>
     </>
    );
}

export default NavBar;