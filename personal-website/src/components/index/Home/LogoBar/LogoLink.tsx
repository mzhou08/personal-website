import React from 'react';
import { Center, Image, Link } from '@chakra-ui/react';

function LogoLink(
    props: { src: string; link: string }
) {
    return (
        <Center>
            <Link
                href={props.link}
            >
                <Image
                    height='80px'
                    src={props.src}
                    filter='drop-shadow(2px 2px 2px #373737)'
                />
            </Link>
        </Center>
    )
}

export default LogoLink;