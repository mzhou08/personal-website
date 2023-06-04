import React from 'react';
import BuildPage from '../../common/BuildPage';


function HomeComponent() {
    return (
        <div className="w-full p-8">
            <div className="font-header text-left \
            text-2xl font-header font-bold tracking-widest \
            pt-4 bg-grey-100">
                Welcome
            </div>
            <div className="font-header text-left \
            text-normal font-header font-regular tracking-widest \
            pt-4 bg-grey-100">
                My corner of the Internet.
            </div>

            {/* Separator */}
            <hr className="h-px w-2/3 my-4 bg-gray-200 border-0 dark:bg-gray-700" />

            <div className="font-body text-left">
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
                Feel free to reach out!
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