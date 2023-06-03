import React from 'react';

import LogoLink from './LogoLink';

function LogoBar() {
    return (
        <div className="flex justify-center h-16 bg-blue-100 p-4">
            <LogoLink
                src="/images/linkedin-logo.png"
                link="https://www.linkedin.com/in/michaelhzhou/"
                desc="LinkedIn"
            />
            <LogoLink
                src="/images/github-logo.svg"
                link="https://github.com/mzhou08"
                desc="GitHub"
            />
            <LogoLink
                src="/images/medium-logo.png"
                link="https://medium.com/@mzhou08"
                desc="Medium"
            />
        </div>
                
        
    )
}

export default LogoBar;