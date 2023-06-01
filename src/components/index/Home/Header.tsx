import React from "react";
import { Text } from '@chakra-ui/react';

function Header() {
    return (
        <>
            <Text
                fontSize='h1'
            >
                &ensp;Hi! I'm
            </Text>
            <Text
                fontSize='h1'
                fontWeight='bold'
                border='2px'
                bg='#C3A9ED'
                display='inline-block'
            >
                &ensp;Michael Zhou&ensp;
            </Text>
        </>
    )
}

export default Header;