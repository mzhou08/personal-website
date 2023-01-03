import React from 'react';
import { Container, Flex, Spacer } from '@chakra-ui/react';

import HomeLink from '../NavLink/HomeLink';
import AboutLink from '../NavLink/AboutLink';
import ProjectsLink from '../NavLink/ProjectsLink';
import WorkLink from '../NavLink/WorkLink';

function NavBar () {
    return (
        <Container w='66.666666%'>
            <Flex justifyContent='space-between'>
                <HomeLink />
                <AboutLink />
                <ProjectsLink />
                <WorkLink />
            </Flex>
        </Container>
    );
}

export default NavBar;