import React from 'react';

import { Center, Flex } from '@chakra-ui/react';
import LogoLink from './LogoLink';

function LogoBar() {
    return (
        <Center width='100%' height='100%'>
            <Flex
                justifyContent='space-between'
                width='100%'
            >
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
        </Center>
        
    )
}

export default LogoBar;