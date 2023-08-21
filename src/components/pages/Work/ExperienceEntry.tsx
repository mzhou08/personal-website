import React from "react";

function ExperienceEntry (props: {
    mainHeader: string,
    sideHeader: string,
    location: string,
    dates: string,
    description: string
}) {
    return (
        // card representing the entries 
        <div className="pb-4">
            <h1 className="font-bold float-left">
                {props.mainHeader.toUpperCase()}
            </h1>
            <h2 className="float-left">
                &nbsp;| {props.sideHeader.toUpperCase()}
            </h2>
            <h3 className="clear-both">
                {props.dates.toUpperCase()}
            </h3>
            <div className="font-body text-left">
                {props.description}
            </div>
        </div>
    )
}

export default ExperienceEntry;