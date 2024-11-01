import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React, { Component } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import tw from "twin.macro";

import Feature from "components/features/TwoColSingleFeatureWithStats2-button.js";
import Header from 'components/headers/light.js'
import Footer from "components/footers/Home-Footer";

// import { createBrowserHistory } from 'history'

// export const history = createBrowserHistory({forceRefresh: true})

function goBackToEvents(history) {
    history.push("/events")
    history.go(0)
}

function Events() {
    const location = useLocation()
    const card = location.state
    const history = useHistory()
    
    if (!card) goBackToEvents(history, card)

    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return (
        <AnimationRevealPage>
            <Header />
            <Feature 
                subheading={card.date}
                heading={card.title}
                description={card.description ? card.description : null}
                imageSrc={card.imageSrc}
                primaryButtonText="Register Now!"
                registrableEvent={card.registrableEvent ? card.registrableEvent : false}
                minTeamSize={card.minTeamSize ? card.minTeamSize : 1}
                maxTeamSize={card.maxTeamSize ? card.maxTeamSize : 1}
                prize={card.prize ? card.prize : ""}
                isFlagship={card.isFlagship ? card.isFlagship : false}
                rulebookLink={card.rulebookLink ? card.rulebookLink : ""}
                statistics={
                    (card.maxTeamSize > 1) ? 
                    [   
                        {
                            key: "Time",
                            value: `${card.timing}`
                        },
                        {
                            key: "Group size",
                            value: `${card.minTeamSize}-${card.maxTeamSize}`
                        },
                        {
                            key: "Prize",
                            value: `${card.prize}`
                        }
                    ] : 
                    (
                        (card.registrableEvent) ?
                        [
                            {
                                key: "Time",
                                value: `${card.timing}`
                            },
                            {
                                key: "Event type",
                                value: "Individual"
                            },
                            {
                                key: "Prize",
                                value: `${card.prize}`
                            }
                        ] :
                        (
                            (card.timing) ?
                            [
                                {
                                    key: "Time",
                                    value: `${card.timing}`
                                },
                                {
                                    key: "Prize",
                                    value: `${card.prize}`
                                }
                            ] :
                            null
                        )
                    )
                }
            />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Events;