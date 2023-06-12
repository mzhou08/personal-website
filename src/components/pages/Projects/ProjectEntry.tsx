import React from "react";

export default function ProjectEntry (props: {
    alignLeft: boolean,
    imgFile: string,
    mainHeader: string,
    sideHeader: string,
    location: string,
    dates: string,
    description: string
}) {
    return (
        // card representing the entries 
        <div className="display-block clear-both">
            {/* Thumbnail Image */}
            
            <div className={`flex align-center w-1/2 aspect-square bg-white float-${props.alignLeft ? "left" : "right"}`}>
                <img
                src={`images/${props.imgFile}`}
                alt={props.mainHeader}
                className="w-full p-8 object-contain"
                />
            </div>
            <div className={`w-1/2 p-8 float-left`}>
                <div className="font-body text-left text-pastel-400 \
                text-lg font-bold tracking-wide">
                    {props.mainHeader.toUpperCase()}
                </div>
                <div className="font-body text-left text-pastel-400 \
                text-lg tracking-wide">
                    {props.sideHeader.toUpperCase()}
                </div>
                <div className="font-body text-left text-pastel-400 \
                text-xs tracking-wide">
                    {props.dates.toUpperCase()}
                </div>
                <div className="font-body text-left">
                    {props.description}
                </div>
            </div>
        </div>
    )
};
