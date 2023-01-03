import React from 'react';
import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function AboutLink() {
    return (
        <Link
            as={ReactLink}
            to="/about"
            color="gray.dark"
            _hover={{
                fontWeight: 'bold',
            }}
        >
            About
        </Link>
    )
}

export default AboutLink;