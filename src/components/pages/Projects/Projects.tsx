import React from 'react';
// import ScrollAnimationItem from 'react-scroll-fade-animation';

import ProjectEntry from './ProjectEntry';
import BuildPage from '../../common/BuildPage';

function ProjectComponent() {

    const projects = [
        {
            imgFile: "t-ai-logo.png",
            mainHeader: 'T-AI',
            sideHeader: 'Teaching Assistant for Educational Videos',
            location: 'Pittsburgh, PA',
            dates: 'Spring 2023',
            description: 'Developed AI teaching assistant to answer student questions and assess understanding using video content. TartanHacks 2023 Grand Prize'
        },
        {
            imgFile: "click-color.png",
            mainHeader: 'ClickShare',
            sideHeader: 'Collaborative Browser Extension',
            location: 'Pittsburgh, PA',
            dates: 'Spring 2022',
            description: 'Screen-sharing application that projects clicks onto browser windows, facilitating non-invasive collaboration. TartanHacks 2022 Google Cloud Award'
        },
        {
            imgFile: "scottyrank-bare.png",
            mainHeader: 'ScottyRank',
            sideHeader: 'Julia Implementation of PageRank',
            location: 'Pittsburgh, PA',
            dates: 'Fall 2021',
            description: 'PageRank implementation in Julia.'
        },
        {
            imgFile: "bioinf-php.png",
            mainHeader: 'Bioinf-PHP',
            sideHeader: 'Protein Analysis Pipeline',
            location: 'Ann Arbor, MI',
            dates: '2020',
            description: 'Built a bioinformatics pipeline web application to automate various gene analysis tasks.'
        },
    ]

    let alignLeft = false;

    let entries: Array<React.JSX.Element> = [];
    
    projects.forEach(
        (exp, idx) => {
            alignLeft = !alignLeft;
            entries.push(
                <div key={idx}>
                    {ProjectEntry({alignLeft, ...exp})}
                </div>
            );
        }
    )

    return (
        <div className="w-full p-8">
            {entries}
        </div>
    )
}

export default function Projects(props: any) {
    return (
        BuildPage(props, ProjectComponent)
    )
};
