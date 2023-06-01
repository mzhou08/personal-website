import React from 'react';
import { Container, Flex } from '@chakra-ui/react';

import NavLink from './NavLink/NavLink';

function NavBar () {
    return (
        <Container w='66.666666%'>
            <Flex justifyContent='space-between'>
                <NavLink content='Home' to='/'/>
                <NavLink content='About' to='/about'/>
                <NavLink content='Projects' to='/projects'/>
                <NavLink content='Work' to='/work'/>
            </Flex>
        </Container>
    );
}

export default NavBar;