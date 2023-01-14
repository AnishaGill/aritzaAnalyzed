import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage';
import { BrandPage } from "./pages/brandPage"
import { WelcomePage } from "./pages/welcomePage"
import { MoneyPage } from "./pages/moneyPage"
import { ColourPage } from './pages/colourPage';
import { EndPage } from "./pages/endPage"
import { MonthlyMoneyPage } from './pages/monthMoneyPage';


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
                        <BrandPage />
                    </FullpageSection>

                    <FullpageSection style={Style}>
                        <ColourPage />
                    </FullpageSection>
                  
                    <FullpageSection style={Style}>
                        <MonthlyMoneyPage />
                    </FullpageSection>

                    <FullpageSection style={Style}>
                        <MoneyPage />
                    </FullpageSection>

                    <FullpageSection style={Style}>
                        <EndPage />
                    </FullpageSection>

                </FullPageSections>
        </Fullpage>
    );
};