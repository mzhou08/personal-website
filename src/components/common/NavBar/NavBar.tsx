import React from 'react';

import { Link, useLocation } from 'react-router-dom';

function NavBar () {
    const location = useLocation();

    function toNavBarLink(
        name: string, path: string, isCurrPath: boolean
    ) {
        return (
            <Link
                to={path}
                key={name}
                className={`text-center align-middle my-auto ${isCurrPath ? "underline" : ""} \
                font-header font-extrabold tracking-widest text-pastel-text \
                decoration-wavy underline-offset-4 hover:underline`}>
                {name.toUpperCase()}
            </Link>
        )
    }

    const pageArgs = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Projects", path: "/projects"},
        {name: "Work", path: "/work"},
        {name: "Resume", path: "/resume"},
    ]


    return (
        <div className="fixed w-3/4 h-1/10 right-0 shadow-lg bg-pastel-100">
            <div className="fixed w-3/4 h-1/10 flex justify-evenly">
                {
                    pageArgs.map(
                        (args) => (toNavBarLink(args.name, args.path, args.path === location.pathname))
                    )
                }
            </div>
        </div>
    );
}

export default NavBar;