import React from 'react';

export default function HorizontalBar(
    props: {center: boolean}
) {
    return (
        <hr className={`h-0 w-full ${props.center ? "mx-auto" : "right-0"} my-4 border-dashed border-top-2 border-pastel-500`} />
    )
}