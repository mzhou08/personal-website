import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeButton() {
    let navigate = useNavigate();

    function handleClick() {
        let path = `home`;
        navigate(path);
    }

    return (
        <button className="NavButton" onClick={handleClick}>
            Home
        </button>
    )
}

export default HomeButton;