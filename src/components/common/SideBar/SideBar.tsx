import React from 'react';
import LogoBar from '../LogoBar/LogoBar';

function SideBar () {
    return (
        <div className="fixed w-1/4 h-full bg-pastel-200 shadow-xl">
            {/* Profile Photo */}
            <div className="flex w-full h-1/3">
                <img
                    src='/images/profile.jpeg'
                    alt='credit to josh chin'
                    className="m-auto rounded-full w-2/3 \
                    border-8 border-solid border-pastel-400 \
                    shadow-lg"
                />
            </div>

            {/* Name */}
            <div className="text-center text-pastel-400 \
            text-2xl font-header font-bold tracking-widest \
            pt-4">
                Michael Zhou
            </div>
            <div className="text-center text-pastel-400 \
            text-lg font-header font-regular tracking-widest \
            p-2">
                Student | Researcher | Builder
            </div>

            {/* Separator */}
            <hr className="h-px w-2/3 mx-auto my-4 bg-pastel-400 border-0 dark:bg-gray-700" />

            {/* Intro */}
            <div className="pt-0 pb-0 p-8">
                <div className="text-left text-pastel-400 \
                text-l font-body font-regular tracking-regular \
                p-8">
                    Hey, I'm Michael. Current junior at Carnegie Mellon SCS,
                    lifelong learner, and appreciator of the elegant side of life.
                    I'm passionate about using technology for social impact, especially in education.
                    <br/>
                    <br/>
                    Welcome to my site!
                </div>
            </div>

            {/* Separator */}
            <hr className="h-px w-2/3 mx-auto my-4 bg-pastel-400 border-0 dark:bg-gray-700" />

            {/* Logos/Links */}
            <LogoBar />

            {/* Footnote */}
            <div className="text-center italic text-pastel-400 \
            text-m font-body font-regular tracking-regular \
            p-4">
                Michael Zhou, 2023
            </div>
        </div>
    )
}

export default SideBar;