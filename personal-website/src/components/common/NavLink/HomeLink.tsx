import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function HomeLink() {
    return (
        <Flex
            justifyContent='center'
        >
            <Link
                as={ReactLink}
                to='/'
                color='gray.dark'
                _hover={{
                    fontWeight: 'bold',
                }}
            >
                Home
            </Link>
        </Flex>
        
    )
}

export default HomeLink;