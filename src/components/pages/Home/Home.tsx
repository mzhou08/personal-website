import React from 'react';
import BuildPage from '../../common/BuildPage';
import HorizontalBar from '../../common/HorizontalBar/HorizontalBar';
import { Link } from 'react-router-dom';


function HomeComponent() {
    return (
        <div className="w-full">
            <h1 className="text-center">
                WELCOME
            </h1>

            <h2 className="text-center">
                Michael Zhou's Game of Life player card
            </h2>

            <HorizontalBar center={false}/>

            <ul className="fa-ul list-none list-inside">
                <li><i className="fa-li fa-solid fa-address-card opacity-50 scale-75"></i>
                    <Link to="/about">My (very summarized) life story and interests</Link>
                </li>
                <li><i className="fa-li fa-solid fa-wrench opacity-50 scale-75"></i>
                    <Link to="/projects">Cool things I've built</Link>
                </li>
                <li><i className="fa-li fa-solid fa-briefcase opacity-50 scale-75"></i>
                    <Link to="/work">Teaching & professional experience</Link>
                </li>
                <li><i className="fa-li fa-solid fa-file opacity-50 scale-75"></i>
                    <Link to="/resume">Downloadable resum&#233;</Link>
                </li>
                <li><i className="fa-li fa-solid fa-address-book opacity-50 scale-75"></i>
                    <Link to="/resume">My contact info (Let's talk!)</Link>
                </li>
                <li><i className="fa-li fa-solid fa-code opacity-50 scale-75"></i> Made with React + Tailwind. Feel free to use <a
                        href="https://github.com/mzhou08/personal-website"
                        className="underline"
                    >
                        as a template
                    </a>!
                </li>
            </ul>
        </div>
        
    )
};

function Home(props: any) {
    return (
        BuildPage(props, HomeComponent)
    )
}

export default Home;