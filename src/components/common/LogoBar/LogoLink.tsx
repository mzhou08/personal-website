import React from 'react';

function LogoLink(
    props: { src: string; link: string; desc: string }
) {
    return (
        <a href={props.link} className="drop-shadow-md h-full pr-2 pl-2">
            <img
                src={props.src}
                alt={props.desc}
                className="h-full"
            />
        </a>
    )
}

export default LogoLink;