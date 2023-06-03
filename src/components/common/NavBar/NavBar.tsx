import React from 'react';

import { Link } from 'react-router-dom';

function NavBar () {
    function toNavBarLink(
        name: string, path: string
    ) {
        return (
            <Link to={path} className="text-center align-middle my-auto font-header font-extrabold tracking-widest">
                {name.toUpperCase()}
            </Link>
        )
    }

    const pageArgs = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Projects", path: "projects"},
        {name: "Work", path: "/work"},
        {name: "Resume", path: "/resume"},
        {name: "Contact", path: "/contact"},
    ]


    return (
        <div className="absolute w-3/4 h-1/8 right-0">
            <div className="fixed w-3/4 h-1/10 flex justify-evenly">
                {
                    pageArgs.map(
                        (args) => (toNavBarLink(args.name, args.path))
                    )
                }
            </div>
        </div>
    );
}

export default NavBar;