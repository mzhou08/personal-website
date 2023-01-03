import React from 'react';
import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function ProjectsLink() {
    return (
        <Link
            as={ReactLink}
            to="/projects"
            color="gray.dark"
            _hover={{
                fontWeight: 'bold',
            }}
        >
            Projects
        </Link>
    )
}

export default ProjectsLink;