import React from 'react';
import { Text } from '@chakra-ui/react';

function Welcome() {
    return (
        <Text
            fontSize='paragraph'
            margin='40px' // This is jank bro
        >
            Welcome to my personal site--
            a summary of my achievements,
            milestones, and current quests in
            the Game of Life.
        </Text>
    )
}

export default Welcome;