import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function AboutLink() {
    return (
        <Flex
            justifyContent='center'
        >
            <Link
                as={ReactLink}
                to='/about'
                color='gray.dark'
                _hover={{
                    fontWeight: 'bold',
                }}
            >
                About
            </Link>
        </Flex>
        
    )
}

export default AboutLink;