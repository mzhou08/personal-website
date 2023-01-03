import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function WorkLink() {
    return (
        <Flex
            justifyContent='center'
        >
            <Link
                as={ReactLink}
                to='/work'
                color='gray.dark'
                _hover={{
                    fontWeight: 'bold',
                }}
            >
                Work
            </Link>
        </Flex>
        
    )
}

export default WorkLink;