import React from 'react';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';


function HomeComponent() {
    return (
        <div className="w-full">
            <h1 className="font-header text-left text-pastel-text \
            text-2xl font-header font-bold tracking-widest \
            pt-4">
                Welcome
            </h1>
            <div className="font-header text-left text-pastel-text \
            text-normal font-header font-regular tracking-widest \
            pt-4">
                My corner of the Internet.
            </div>

            <HorizontalBar center={false}/>

            <div className="">
                I made this site with React.js and TailwindCSS. Source code can be
                found on <a
                        href="https://github.com/mzhou08/personal-website"
                        className="underline"
                    >
                        Github
                    </a>. Feel free to use & reuse as you please!
                <br/><br/>
                On this site, you can find everything from my resume to projects to recent reads (coming soon). Enjoy!
                <br/><br/>
                Disclaimer: This site is still a work in progress, so there may be a few quirks.
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