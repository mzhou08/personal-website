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
            <div className="font-body text-left text-pastel-400 \
            text-lg font-bold tracking-wide \
            float-left">
                {props.mainHeader.toUpperCase()}
            </div>
            <div className="font-body text-left text-pastel-400 \
            text-lg tracking-wide \
            float-left">
                &nbsp;| {props.sideHeader.toUpperCase()}
            </div>
            <div className="
            clear-both font-body text-left text-pastel-400 \
            text-xs tracking-wide">
                {props.dates.toUpperCase()}
            </div>
            <div className="font-body text-left">
                {props.description}
            </div>
        </div>
    )
}

export default ExperienceEntry;