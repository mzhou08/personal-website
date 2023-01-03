import React from 'react';
import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function WorkLink() {
    return (
        <Link
            as={ReactLink}
            to="/work"
            color="gray.dark"
            _hover={{
                fontWeight: 'bold',
            }}
        >
            Work
        </Link>
    )
}

export default WorkLink;