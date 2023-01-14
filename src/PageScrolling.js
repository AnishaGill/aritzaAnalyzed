import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage';
import { BrandPage } from "./pages/brandPage"
import { WelcomePage } from "./pages/welcomePage"


export const PageScroll = () => {

    const Style = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Fullpage>
            <FullpageNavigation />
                <FullPageSections>
                    <FullpageSection>
                        <WelcomePage  />
                    </FullpageSection>
                    <FullpageSection>
                        
                    </FullpageSection>
                </FullPageSections>
        </Fullpage>
    );
};