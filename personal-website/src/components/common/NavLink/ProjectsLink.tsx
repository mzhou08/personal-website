import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function ProjectsLink() {
    return (
        <Flex
            justifyContent='center'
        >
            <Link
                as={ReactLink}
                to='/projects'
                color='gray.dark'
                _hover={{
                    fontWeight: 'bold',
                }}
            >
                Projects
            </Link>
        </Flex>
        
    )
}

export default ProjectsLink;