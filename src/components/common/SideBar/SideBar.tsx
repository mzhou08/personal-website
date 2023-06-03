import React from 'react';
import LogoBar from '../LogoBar/LogoBar';

function SideBar () {
    return (
        <div className="fixed w-1/4 h-full">
            {/* Profile Photo */}
            <div className="flex w-full h-1/3 bg-gray-400">
                <img
                    src='/images/profile.jpeg'
                    alt='credit to josh chin'
                    className="m-auto rounded-full w-2/3 \
                    border-8 border-solid border-slate-300 \
                    shadow-lg"
                />
            </div>

            {/* Name */}
            <div className="text-center \
            text-2xl font-header font-bold tracking-widest \
            pt-4 bg-purple-200">
                Michael Zhou
            </div>
            <div className="text-center \
            text-xl font-header font-regular tracking-widest \
            p-2 bg-purple-200">
                Student | Researcher | Builder
            </div>

            {/* Separator */}
            <hr className="h-px w-2/3 mx-auto my-4 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Intro */}
            <div className="pt-0 p-8 bg-red-100">
                <div className="text-left \
                text-l font-body font-regular tracking-regular \
                p-8 bg-green-200">
                    Hey, I'm Michael. Current junior at Carnegie Mellon SCS,
                    lifelong learner, and appreciator of the elegant side of life.
                    I'm passionate about using technology for social impact, especially in education.
                    <br/>
                    <br/>
                    Welcome to my site!
                </div>
            </div>

            {/* Separator */}
            <hr className="h-px w-2/3 mx-auto my-4 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Logos/Links */}
            <LogoBar />

            {/* Footnote */}
            <div className="text-center italic \
            text-m font-body font-regular tracking-regular \
            p-4 bg-green-200">
                Michael Zhou, 2023
            </div>
        </div>
    )
}

export default SideBar;