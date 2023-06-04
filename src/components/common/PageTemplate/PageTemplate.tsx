import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

export default function PageTemplate(
    props: any,
    displayComponent: React.FunctionComponent,
) {
    return (
        <div className="h-full w-full">
            <SideBar />
            <NavBar />
            <div className="absolute w-3/4 right-0 top-1/10 bg-yellow-100">
                { displayComponent(props) }
            </div>
        </div>
    )
};