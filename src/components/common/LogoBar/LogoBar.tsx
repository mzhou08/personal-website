import React from 'react';
import { faLinkedinIn, faXTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import LogoLink from './LogoLink';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function LogoBar() {
    return (
        <div className="flex justify-center h-12 p-3">
            <LogoLink
                icon={faLinkedinIn as IconProp}
                link="https://www.linkedin.com/in/michaelhzhou/"
            />
            <LogoLink
                icon={faGithub as IconProp}
                link="https://github.com/mzhou08"
            />
            <LogoLink
                icon={faXTwitter as IconProp}
                link="https://twitter.com/michaelhzhou"
            />
            <LogoLink
                icon={faMedium as IconProp}
                link="https://medium.com/@mzhou08"
            />
            <LogoLink
                icon={faPaperPlane as IconProp}
                link="mailto:mhzhou@andrew.cmu.edu"
            />
        </div>
                
        
    )
}

export default LogoBar;