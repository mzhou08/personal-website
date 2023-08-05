import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function LogoLink(
    props: { icon: IconProp; link: string; }
) {
    return (
        <a href={props.link} className="drop-shadow-md h-full pr-2 pl-2">
            <FontAwesomeIcon
                icon={props.icon}
                className="h-full text-pastel-400"
            />
        </a>
    )
}

export default LogoLink;