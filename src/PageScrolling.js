import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage';
import { BrandPage } from "./pages/brandPage"
import { WelcomePage } from "./pages/welcomePage"


export const PageScroll = () => {
    return (
        <Fullpage>
            <FullpageNavigation />
                <FullPageSections>
                    <FullpageSection style={{height: '100vh'}}>
                        <WelcomePage />
                    </FullpageSection>
                    <FullpageSection>
                        
                    </FullpageSection>
                </FullPageSections>
        </Fullpage>
    );
};