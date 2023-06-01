import React from 'react';
import { Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavLink(props: any) {
    const {content, to } = props

    return (
        <Center
            h='14.814814vh'
        >
             <Link to={to}>
                {content}
            </Link>
        </Center>
        
    )
}

export default NavLink;