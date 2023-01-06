import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import NavBar from '../../common/NavBar/NavBar';
import Photo from './Photo';

function Home() {
    return (
        <Grid 
            templateRows='repeat(12, 1fr)'
            templateColumns='repeat(12, 1fr)'
            // gap={2}
        >
            <GridItem colSpan={12}>
                <NavBar />
            </GridItem>
            <GridItem colStart={8} colEnd={11} rowStart={4} rowEnd={10}>
                <Photo />
            </GridItem>
        </Grid>
    )
}

export default Home;