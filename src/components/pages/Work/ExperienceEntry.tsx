import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text
} from '@chakra-ui/react';

function ExperienceEntry (props: {
    company: string,
    role: string,
    location: string,
    dates: string,
    description: string
}) {
    return (
        // card representing the entries 
        <Card>
            <CardHeader>
                <Heading> {props.company} | {props.role} </Heading>
            </CardHeader>
            <CardBody>
                <Text> {props.description} </Text>
            </CardBody>
        </Card>
    )
}

export default ExperienceEntry;