import React from 'react';
import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function HomeLink() {
    return (
        <Link
            as={ReactLink}
            to="/"
            color="gray.dark"
            _hover={{
                fontWeight: 'bold',
            }}
        >
            Home
        </Link>
    )
}

export default HomeLink;