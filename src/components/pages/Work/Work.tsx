import React from 'react';
// import ScrollAnimationItem from 'react-scroll-fade-animation';

import ExperienceEntry from './ExperienceEntry';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';

function WorkComponent() {

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
            mainHeader: 'Lawrence Livermore National Laboratory',
            sideHeader: 'Global Security Research Intern',
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
        <div className="w-full p-8">
            <div className="font-header text-left text-pastel-400 \
            text-2xl font-bold tracking-widest \
            pt-4">
                WORK
            </div>
            <HorizontalBar center={false} />
            <div className="font-body text-left pb-4">
                I've had the privilege to experience a variety of roles at some great teams.
                Here's a brief history.
            </div>
            <div className="font-body text-left font-bold text-xl pt-4 text-pastel-400">
                TA EXPERIENCE
            </div>
            <HorizontalBar center={false} />
            {taEntries}
            <div className="font-body text-left font-bold text-xl pt-4 text-pastel-400">
                INDUSTRY EXPERIENCE
            </div>
            <HorizontalBar center={false} />
            {workEntries}
        </div>
    )
}

export default function Work(props: any) {
    return (
        BuildPage(props, WorkComponent)
    )
};
