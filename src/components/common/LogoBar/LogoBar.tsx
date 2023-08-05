import React from 'react';
import { faLinkedinIn, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import LogoLink from './LogoLink';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function LogoBar() {
    return (
        <div className="flex justify-center h-16 p-4">
            <LogoLink
                icon={faLinkedinIn as IconProp}
                link="https://www.linkedin.com/in/michaelhzhou/"
            />
            <LogoLink
                icon={faGithub as IconProp}
                link="https://github.com/mzhou08"
            />
            <LogoLink
                icon={faMedium as IconProp}
                link="https://medium.com/@mzhou08"
            />
        </div>
                
        
    )
}

export default LogoBar;