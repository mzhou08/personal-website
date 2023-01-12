import React from 'react';
import { Center, Link } from '@chakra-ui/react';

function NavLink(props: any) {
    const {content, ...rest } = props

    return (
        <Center
            h='14.814814vh'
        >
            <Link
                color='gray.dark'
                fontSize='h2'
                opacity='0.5'
                _hover={{
                    opacity: '1.0',
                }}
                { ...rest }
            >
                {content}
            </Link>
        </Center>
        
    )
}

export default NavLink;