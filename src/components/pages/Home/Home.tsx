import React from 'react';
import BuildPage from '../../common/BuildPage';


function HomeComponent() {
    return (
        <div className="w-full p-8">
            <div className="font-header text-left text-pastel-400 \
            text-2xl font-header font-bold tracking-widest \
            pt-4">
                Welcome
            </div>
            <div className="font-header text-left text-pastel-400 \
            text-normal font-header font-regular tracking-widest \
            pt-4">
                My corner of the Internet.
            </div>

            {/* Separator */}
            <hr className="h-px w-2/3 my-4 bg-pastel-400 border-0 dark:bg-gray-700" />

            <div className="font-body text-left text-pastel-400">
                I made this site with React.js and TailwindCSS. Source code can be
                found on <a
                        href="https://github.com/mzhou08/personal-website"
                        className="underline"
                    >
                        Github
                    </a>. Feel free to use & reuse as you please!
                <br/><br/>
                On this site, you can find everything from my resume to projects to recent reads.
                <br/><br/>
                FILLER TEXT HERE
            </div>
        </div>
        
    )
};

function Home(props: any) {
    return (
        BuildPage(props, HomeComponent)
    )
}

export default Home;