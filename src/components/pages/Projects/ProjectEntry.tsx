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
        <div className={`flex ${props.alignLeft ? "flex-row" : "flex-row-reverse"}`}>
            {/* Thumbnail Image */}
            
            <div className="flex align-center w-1/2 aspect-square bg-white">
                <img
                src={`images/${props.imgFile}`}
                alt={props.mainHeader}
                className="w-full p-8 object-contain"
                />
            </div>
            <div className="w-1/2 px-8 pt-8">
                <h1 className="">
                    {props.mainHeader.toUpperCase()}
                </h1>
                <h2 className="">
                    {props.sideHeader.toUpperCase()}
                </h2>
                <h3 className="">
                    {props.dates.toUpperCase()}
                </h3>
                <div className="">
                    {props.description}
                </div>
            </div>
        </div>
    )
};
