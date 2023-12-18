import React from 'react';
import LogoBar from '../LogoBar/LogoBar';
import HorizontalBar from '../HorizontalBar/HorizontalBar';

function SideBar () {
    return (
        <div className="fixed w-1/4 h-full px-8 bg-pastel-200 overflow-scroll">
            <div className="flex flex-col">
                {/* Profile Photo */}
                <div className="flex flex-col w-full aspect-square">
                    <div
                        className="flex justify-self-center m-auto rounded-3xl w-2/3 aspect-square \
                       "   
                    >
                        <img
                            src='/images/profile.jpeg'
                            alt='credit to josh chin'
                            className="m-auto aspect-square rounded-3xl \
                            shadow-xl saturate-50 hover:saturate-100 transition-all"
                        />
                    </div>
                    
                </div>

                {/* Name */}
                <div className="text-center text-pastel-text \
                text-3xl font-header font-bold tracking-widest \
                ">
                    Michael Zhou
                </div>
                <a className="text-center font-header" href="mailto: michaelzhou@andrew.cmu.edu">michaelzhou [at] cmu [dot] edu</a>
                <div className="relative overflow-hidden">
                    <i className="w-full invisible" title="Thanks Anuda for knowing what a rolodex is">
                        PLACEHOLDER
                    </i>
                    <ul id="roll-one" className="w-full absolute top-0 list-none">
                        <li className="text-center text-pastel-text \
                            text-lg font-header font-regular tracking-widest \
                            ">student</li>
                        <li className="text-center text-pastel-text \
                            text-lg font-header font-regular tracking-widest \
                            ">researcher</li>
                        <li className="text-center text-pastel-text \
                            text-lg font-header font-regular tracking-widest \
                            ">engineer</li>
                        <li className="text-center text-pastel-text \
                            text-lg font-header font-regular tracking-widest \
                            ">entrepreneur</li>
                    </ul>
                </div>           
                <HorizontalBar center={true}/>

                {/* Intro */}
                <div className="">
                    <div className="py-4">
                        Hey, I'm Michael. Junior at Carnegie Mellon SCS and
                        lifelong learner. Interested in ML, AI, and curious about many more things.
                    </div>
                </div>

                <HorizontalBar center={true}/>

                {/* Logos/Links */}
                <LogoBar />

                {/* Footnote */}
                <div className="text-center text-pastel-text/50 text-sm p-4">
                    &copy; Michael Zhou | 2023
                </div>
            </div>
        </div>
    )
}

export default SideBar;