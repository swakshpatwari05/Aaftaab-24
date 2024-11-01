import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React, { Component } from 'react';
import tw from "twin.macro";

import TabGrid from "components/cards/TabCardGrid-Events.js";
import Header from 'components/headers/light.js'
import Footer from "components/footers/Home-Footer";

function Events() {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return (
        <AnimationRevealPage>
            <Header />
            <TabGrid
                heading={
                <>
                    Event <HighlightedText>schedule.</HighlightedText>
                </>
                }
            />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Events;