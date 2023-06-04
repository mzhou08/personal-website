import React from 'react';
import PageTemplate from '../../common/PageTemplate/PageTemplate';


function HomeComponent() {
    return (
        <div className="w-full h-full">
            HOMEPAGE
        </div>
    )
};

function Home(props: any) {
    return (
        PageTemplate(props, HomeComponent)
    )
}

export default Home;