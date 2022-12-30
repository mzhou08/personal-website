import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutButton() {
    let navigate = useNavigate();

    function handleClick() {
        let path = `about`;
        navigate(path);
    }

    return (
        <button className="NavButton" onClick={handleClick}>
            About
        </button>
    )
}

export default AboutButton;