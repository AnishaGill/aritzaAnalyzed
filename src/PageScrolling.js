import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage';
import { BrandPage } from "./pages/brandPage"
import { WelcomePage } from "./pages/welcomePage"
import { MoneyPage } from "./pages/moneyPage"
import { ColourPage } from './pages/colourPage';


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
                    
                    <FullpageSection style={Style}>
                        <WelcomePage  />
                    </FullpageSection>

                    <FullpageSection style={Style}>
                        a
                    </FullpageSection>

                    <FullpageSection style={Style}>
                        <ColourPage />
                    </FullpageSection>

                    <FullpageSection style={Style}>
                        c
                    </FullpageSection>

                    <FullpageSection style={Style}>
                        <MoneyPage />
                    </FullpageSection>

                    <FullpageSection style={Style}>
                        end
                    </FullpageSection>
                </FullPageSections>
        </Fullpage>
    );
};