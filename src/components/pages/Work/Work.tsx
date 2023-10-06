import React from 'react';
// import ScrollAnimationItem from 'react-scroll-fade-animation';

import ExperienceEntry from './ExperienceEntry';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';

function WorkComponent() {

    const researchExperiences = [
        {
            mainHeader: 'CMU Robotics Institute',
            sideHeader: 'Pathak Lab',
            location: 'Pittsburgh, PA',
            dates: 'Fall 2023',
            description: 'Researching self-supervised learning and generative models.',
        },
    ]
    
    const taExperiences = [
        {
            mainHeader: '17-313',
            sideHeader: 'Foundations of Software Engineering',
            location: 'Pittsburgh, PA',
            dates: 'Fall 2023',
            description: 'Taught by Prof. Rohan Padhye and Prof. Andrew Begel. Course content focuses on best practices for software engineering and development in a team setting.',
        },
        {
            mainHeader: '07-180',
            sideHeader: 'Concepts in Artificial Intelligence',
            location: 'Pittsburgh, PA',
            dates: 'Spring 2023',
            description: 'Introductory AI course taught by Prof. Reid Simmons. Covers Heuristic Search, Markov Decision Processes, Reinforcement Learning & Q-Learning, Decision Trees, and Neural Nets. Authored course notes on decision trees, perceptrons, and KNN classification. Held weekly office hours and taught recitations.',
        },
    ]

    const workExperiences = [
        {
            mainHeader: 'Lawrence Livermore Natl. Lab',
            sideHeader: 'Research Intern',
            location: 'Livermore, CA',
            dates: 'May 2023 - Aug 2023',
            description: 'Researching applications of machine learning for cybersecurity threat detection and ﬁngerprinting'
        },
        {
            mainHeader: 'Quantedge Capital',
            sideHeader: 'Software Engineering Intern',
            location: 'Singapore, SG',
            dates: 'May 2022 - Aug 2022',
            description: 'My team designed and built an authentication & authorization service (QAuth) for a $3bn+ AUM hedge fund. Created a custom permission syntax, and wrote authorization algorithms. Developed a Python library to integrate QAuth into applications.\n\nAlso, trading projects. Wrote some trading algorithms + a Python stock exchange for algorithmic agents to trade against each other.'
        },
        {
            mainHeader: 'LearningClues',
            sideHeader: 'Full-Stack Software Engineer',
            location: 'Ann Arbor, MI',
            dates: 'Jun 2021 - Jan 2023',
            description: 'Full-Stack Development, and spearheaded prototyping and product development efforts for Studyguide, a new company direction. Implemented Learning Tools Interoperability (LTI) endpoints, enabling integration with popular learning platforms. Added security checks to an API endpoint used for 600+ classes, restricting users to current course content.',
        },
    ]

    let researchEntries = researchExperiences.map(
        (exp, idx) => (
            <div key={idx}>
                {ExperienceEntry(exp)}
            </div>
        )
    );
    
    let taEntries = taExperiences.map(
        (exp, idx) => (
            <div key={idx}>
                {ExperienceEntry(exp)}
            </div>
        )
    )

    let workEntries = workExperiences.map(
        (exp, idx) => (
            <div key={idx}>
                {ExperienceEntry(exp)}
            </div>
        )
    );


    return (
        <div className="w-full">
            <h1 className="pt-4">
                RESEARCH
            </h1>
            <HorizontalBar center={false} />
            {researchEntries}
            <h1 className="pt-4">
                INDUSTRY
            </h1>
            <HorizontalBar center={false} />
            {workEntries}
            <h1 className="pt-4">
                TEACHING
            </h1>
            <HorizontalBar center={false} />
            {taEntries}
        </div>
    )
}

export default function Work(props: any) {
    return (
        BuildPage(props, WorkComponent)
    )
};
