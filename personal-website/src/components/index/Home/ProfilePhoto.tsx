import React from 'react';
import { Image, Center } from '@chakra-ui/react';

function ProfilePhoto () {
    return (
        <Center>
            <Image
                src='/images/profile.jpeg'
                alt='Me. Photo credit to Joshua Chin'
                // fallbackSrc='https://via.placeholder.com/1268x1268.png?text=Michael+Zhou'
                borderWidth='8px'
                borderStyle='solid'
                borderColor='#86868655'
                borderRadius='full'
                backgroundClip='padding-box'
                boxShadow='lg'
            />
        </Center>
    )
}

export default ProfilePhoto;