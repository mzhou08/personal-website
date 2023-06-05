import React from 'react';

export default function HorizontalBar(
    props: {center: boolean}
) {
    return (
        <hr className={`h-px w-2/3 ${props.center ? "mx-auto" : "right-0"} my-4 bg-pastel-400 border-0 dark:bg-gray-700`} />
    )
}