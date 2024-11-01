import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React, { Component } from 'react';
import Hero from "components/hero/Hero-Section-Homepage";
import Slider from "components/cards/Homepage-Slider";
import Features from "components/features/Homepage-Sponsors-Preview";
import Footer from "components/footers/Home-Footer";
import tw from "twin.macro";
import imgLogo from "../images/old-logo.png";
function Home() {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return (
        <AnimationRevealPage>
            <Hero
                heading={<>The <HighlightedText>literary festival</HighlightedText> of IIT Jodhpur</>}
                description="Aaftaab is a celebration of the splendour, diversity, and inclusiveness of literature. It provides for a melting pot of students from different colleges, cultures, and backgrounds and ensures that they will be left spellbound by the mesmerizing poets, inspiring authors, enthralling literary discussions, and fun-filled activities, including open mics, book launches, quizzes, and live music performances."
                imageSrc={imgLogo}/>
            <Slider />
            <Features />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Home;