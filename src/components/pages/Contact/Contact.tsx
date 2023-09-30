import React from 'react';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';


function ContactComponent() {
    return (
        <div className="w-full">
            <h1 className="pt-4">
               Let's Get in Touch 
            </h1>

            <HorizontalBar center={false}/>

            <div className="">
                <a className="hover:underline underline-offset-4 decoration-1 decoration-wavy" href="mailto: michaelzhou@andrew.cmu.edu">michaelzhou [at] cmu [dot] edu</a>
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