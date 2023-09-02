import React from 'react';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';


function AboutComponent() {
    return (
        <div className="w-full">
            <h1 className="pt-4">
                INTRO
            </h1>

            <HorizontalBar center={false}/>

            <div className="">
                I grew up in Ann Arbor, MI and now study in Pittsburgh, PA.
                I'm an undergrad student at Carnegie Mellon, studying Computer Science.
                Subjects of interest include computers and algorithms (obviously),
                probability theory & math (a bit less obvious), and behavioral science (not so obvious).
            </div>

            <h1 className="pt-4">
                MY HOBBIES
            </h1>

            <HorizontalBar center={false}/>

            <ul className="fa-ul list-none list-inside">
                <li><i className="fa-li fa-solid fa-baseball opacity-50 scale-75"></i> Tennis- Been playing for ~8 years and also follow the ATP. Hoping to see Rafa before he retires</li>
                <li><i className="fa-li fa-solid fa-bowl-food opacity-50 scale-75"></i> Cooking - Big fan of pretty much anything Asian. Let me know of any dishes I should try</li>
                <li><i className="fa-li fa-solid fa-person-running opacity-50 scale-75"></i> Running - Fun way to spend some alone time. Going for a marathon sometime</li>
                <li><i className="fa-li fa-solid fa-book-open-reader opacity-50 scale-75"></i> Reading - Favorite books page coming soon. In the meantime, check out <a href="https://www.goodreads.com/michaelzhou" className="underline">Goodreads</a></li>
                <li><i className="fa-li fa-solid fa-dice  opacity-50 scale-75"></i> Card Games - Always down for a game of poker, fish, or bridge</li>
            </ul>

            <h1 className="pt-4">
                TRAVEL
            </h1>

            <HorizontalBar center={false}/>

            <ul className="fa-ul list-none list-inside">
                <li><i className="fa-li fa-solid fa-location-dot opacity-50 scale-75"></i> Alaska - RV Camping and Sightseeing. Did it twice, wouldn't mind a third.</li>
                <li><i className="fa-li fa-solid fa-location-dot opacity-50 scale-75"></i> China - Visited major cities like Beijing, Shanghai, Shenzhen. Going back soon for regional cuisines and sightseeing.</li>
                <li><i className="fa-li fa-solid fa-location-dot opacity-50 scale-75"></i> Singapore - 3-month internship in 2022. Loved the people, food, and public transport</li>
                <li><i className="fa-li fa-solid fa-location-dot opacity-50 scale-75"></i> Bucket List Destinations - India, Thailand, Spain, Scandinavia, Iceland</li>
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