import React from 'react';
// import ScrollAnimationItem from 'react-scroll-fade-animation';

import ProjectEntry from './ProjectEntry';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';

function ProjectComponent() {

    const projects = [
        {
            imgFile: "click-color.png",
            mainHeader: 'ClickShare',
            sideHeader: 'Collaborative Browser Extension',
            location: 'Pittsburgh, PA',
            dates: 'Spring 2022',
            description: 'Created screen-sharing application that projects clicks onto browser windows, facilitating non-invasive collaboration. Won TartanHacks 2022 Best Use of Google Cloud Award'
        },
        {
            imgFile: "scottyrank-bare.png",
            mainHeader: 'ScottyRank',
            sideHeader: 'Julia Implementation of PageRank',
            location: 'Pittsburgh, PA',
            dates: 'Fall 2021',
            description: 'Implemented a PageRank library with 1000+ lines of code, authored paper on PageRank\'s mathematical theory'
        },
        {
            imgFile: "bioinf-php.png",
            mainHeader: 'Bioinf-PHP',
            sideHeader: 'Protein Analysis Pipeline',
            location: 'Ann Arbor, MI',
            dates: '2020',
            description: 'Built a bioinformatics pipeline web application to automate various gene analysis tasks (e.g. MEME analysis, BLASTP analysis, Multiple Sequence Alignment, Phylogenetic Tree Construction). Published 1st-Author Research Paper and presented at CLOUD 2020 International Conference on Cloud Computing'
        },
    ]

    let alignLeft = false;

    let entries: Array<React.JSX.Element> = [];
    
    projects.forEach(
        (exp, idx) => {
            alignLeft = !alignLeft;
            entries.push(
                <div key={idx} className="clear-both">
                    {ProjectEntry({alignLeft, ...exp})}
                </div>
            );
        }
    )

    console.log(entries);

    return (
        <div className="w-full p-8">
            {entries}
            <div className="clear-both"/>
        </div>
    )
}

export default function Projects(props: any) {
    return (
        BuildPage(props, ProjectComponent)
    )
};
