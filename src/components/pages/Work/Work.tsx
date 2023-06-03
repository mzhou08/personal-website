import React from 'react';
import { Center, Grid, GridItem } from '@chakra-ui/react';
// import ScrollAnimationItem from 'react-scroll-fade-animation';

import NavBar from '../../common/NavBar/NavBar';
import ExperienceEntry from './ExperienceEntry';

function Work() {

    const experiences = [
        {
            company: 'Quantedge Capital',
            role: 'Software Engineering Intern',
            location: 'Singapore, Singapore',
            dates: '5.2022 - 8.2022',
            description: 'My team designed and built an authentication & authorization service (QAuth) for a $3bn+ AUM hedge fund. Created a custom permission syntax, and wrote authorization algorithms. Developed a Python library to integrate QAuth into applications.\n\nAlso, trading projects. Wrote some trading algorithms + a Python stock exchange for algorithmic agents to trade against each other'
        }
    ]

    let children = experiences.map(
        (entry, idx) => (
            <GridItem key={idx} colStart={6} colEnd={12}>
                <Center> {ExperienceEntry(entry)} </Center>
            </GridItem>
        )
    );


    return (
        <Grid 
            templateRows='repeat(5, 1fr)'
            templateColumns='repeat(12, 1fr)'
            bg='#B5DCCD'
            // gap={2}
        >
            {/* Nav Bar */}
            <GridItem colSpan={12}>
                <NavBar />
            </GridItem>

            {children}
            
        </Grid>
    )
}

export default Work;