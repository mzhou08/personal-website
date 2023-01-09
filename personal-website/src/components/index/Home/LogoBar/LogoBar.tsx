import React from 'react';

import { Flex } from '@chakra-ui/react';
import LogoLink from './LogoLink';

function LogoBar() {
    return (
        <Flex justifyContent='space-between'>
            <LogoLink
                src='/images/linkedin-logo.png'
                link='https://www.linkedin.com/in/michael-zhou-6972401a5/'
            />
            <LogoLink
                src='/images/github-logo.svg'
                link='https://github.com/mzhou08'
            />
            <LogoLink
                src='/images/medium-logo.png'
                link='https://medium.com/@mzhou08'
            />
        </Flex>
    )
}

export default LogoBar;