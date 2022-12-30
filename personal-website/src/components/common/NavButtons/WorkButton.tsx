import React from 'react';
import { useNavigate } from 'react-router-dom';

function WorkButton() {
    let navigate = useNavigate();

    function handleClick() {
        let path = `work`;
        navigate(path);
    }

    return (
        <button className="NavButton" onClick={handleClick}>
            Work
        </button>
    )
}

export default WorkButton;