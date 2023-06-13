import React from 'react';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';


function AboutComponent() {
    return (
        <div className="w-full p-8">
            <div className="font-body text-left font-bold text-xl pt-4 text-pastel-400">
                INTRO
            </div>

            <HorizontalBar center={false}/>

            <div className="font-body text-left text-pastel-400">
                I grew up in Ann Arbor, MI and now study in Pittsburgh, PA.
                I'm an undergrad student at Carnegie Mellon, studying Computer Science.
                Subjects of interest include computers and algorithms (obviously),
                probability theory & math (a bit less obvious), and behavioral science (not so obvious).
            </div>

            <div className="font-body text-left font-bold text-xl pt-4 text-pastel-400">
                MY HOBBIES
            </div>

            <HorizontalBar center={false}/>

            <ul className="list-disc list-inside">
                <li>Tennis - Been playing for ~8 years and also follow the ATP. Hoping to see Rafa before he retires.</li>
                <li>Cooking - Big fan of pretty much anything Asian. Let me know of any dishes I should try!</li>
                <li>Distance Running - Was training for a half marathon, then got injured. Boston is on the bucket list.</li>
                <li>Reading - Favorite books page coming soon. In the meantime, check out <a href="https://www.goodreads.com/michaelzhou" className="underline">Goodreads.</a></li>
                <li>Card Games - Nothing better to pass the time than a game of poker, fish, or bridge.</li>
            </ul>

            <div className="font-body text-left font-bold text-xl pt-4 text-pastel-400">
                TRAVEL
            </div>

            <HorizontalBar center={false}/>

            <ul className="list-disc list-inside">
                <li>Alaska - RV Camping and Sightseeing. Did it twice, wouldn't mind a third.</li>
                <li>China - Visited major cities like Beijing, Shanghai, Shenzhen. Going back soon for regional cuisines and sightseeing.</li>
                <li>Singapore - 3-month internship in 2022. Loved the people, food, and public transport</li>
                <li>Bucket List Destinations - India, Thailand, Spain, Scandinavia, Iceland</li>
            </ul>
        </div>
        
    )
};

function About(props: any) {
    return (
        BuildPage(props, AboutComponent)
    )
}

export default About;