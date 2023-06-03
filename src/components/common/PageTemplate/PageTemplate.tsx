import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

export default function PageTemplate() {
    return (
        <div className="h-full w-full">
            <SideBar />
            <NavBar />
        </div>
    )
}