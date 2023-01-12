import React from "react";
import { Highlight, Text } from '@chakra-ui/react';

function Header() {
    return (
        <>
            <Text
                fontSize='heading'
            >
                &ensp;Hi! I'm
            </Text>
            <Text
                fontSize='heading'
                fontWeight='bold'
                border='2px'
                bg='#C3A9ED'
                display='inline-block'
            >
                &ensp;Michael Zhou.&ensp;
            </Text>
        </>
    )
}

export default Header;