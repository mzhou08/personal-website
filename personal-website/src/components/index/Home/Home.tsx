import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import NavBar from '../../common/NavBar/NavBar';
import ProfilePhoto from './ProfilePhoto';
import LogoBar from './LogoBar/LogoBar';
import Header from './Header';
import Welcome from './Welcome';

function Home() {
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

            {/* Intro Heading */}
            <GridItem
                colStart={3} colEnd={7}
                rowStart={2} rowEnd={3}
            >
                <Header />
            </GridItem>

            {/* Welcome Text */}
            <GridItem
                colStart={3} colEnd={7}
                rowStart={3} rowEnd={5}
            >
                <Welcome />
            </GridItem>

            {/* Profile Photo */}
            <GridItem
                colStart={8} colEnd={11}
                rowStart={2} rowEnd={4}
            >
                <ProfilePhoto />
            </GridItem>

            {/* Logo Bar */}
            <GridItem
                colStart={8} colEnd={11}
                rowStart={4} rowEnd={5}
            > 
                <LogoBar />
            </GridItem>
        </Grid>
    )
}

export default Home;