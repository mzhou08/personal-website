import React from 'react';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';


function ContactComponent() {
    return (
        <div className="w-full">
            <h1 className="pt-4">
                THIS PAGE IS A WORK IN PROGRESS.
            </h1>

            <HorizontalBar center={false}/>

            <div className="">
                Imagine there's a cool form here for you to fill out.
                For the time being, you can reach me at <a className="text-underline" href="mailto: mhzhou@andrew.cmu.edu">mhzhou@andrew.cmu.edu</a>
            </div>
        </div>
        
    )
};

function Contact(props: any) {
    return (
        BuildPage(props, ContactComponent)
    )
}

export default Contact;