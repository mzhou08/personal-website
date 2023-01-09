import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import NavBar from '../../common/NavBar/NavBar';
import ProfilePhoto from './ProfilePhoto';
import LogoBar from './LogoBar/LogoBar';

function Home() {
    return (
        <Grid 
            templateRows='repeat(5, 1fr)'
            templateColumns='repeat(12, 1fr)'
            bg='#B5DCCD'
            // gap={2}
        >
            <GridItem colSpan={12}>
                <NavBar />
            </GridItem>
            <GridItem colStart={8} colEnd={11} rowStart={2} rowEnd={4}>
                <ProfilePhoto />
            </GridItem>
            <GridItem colStart={8} colEnd={11} rowStart={4} rowEnd={5}> 
                <LogoBar />
            </GridItem>
        </Grid>
    )
}

export default Home;