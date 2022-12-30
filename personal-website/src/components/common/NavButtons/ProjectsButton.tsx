import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectsButton() {
    let navigate = useNavigate();

    function handleClick() {
        let path = `projects`;
        navigate(path);
    }

    return (
        <button className="NavButton" onClick={handleClick}>
            Projects
        </button>
    )
}

export default ProjectsButton;