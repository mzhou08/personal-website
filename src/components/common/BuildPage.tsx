import React from 'react';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

export default function BuildPage(
    props: any,
    displayComponent: React.FunctionComponent,
) {
    return (
        <div className="h-full w-full bg-pastel-100">
            <div className="absolute w-3/4 right-0 top-1/10">
                <div className="w-4/5 m-auto bg-pastel-200">
                    { displayComponent(props) }
                </div>
            </div>
            <SideBar />
            {/* Vertical Divider */}
            <div className="fixed h-full left-1/4 w-0 z-50 \
            border-l border-pastel-400 border-solid" />
            <NavBar />
        </div>
    )
};