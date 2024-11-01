import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as DateIcon} from "feather-icons/dist/icons/calendar.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import kaviSammelanImg from "../../images/flagship_events/Kavi samelan.png";
import djImg from "../../images/flagship_events/DJ Night.jpg";
import musicshowImg from "../../images/flagship_events/folk_music.jfif";
import BookImg from "../../images/flagship_events/Book Signings.jpg";
import InterviewImg from "../../images/flagship_events/Interview with Director.jpg";
import StandupIMG from "../../images/flagship_events/Standup.jpg";
import TreasurehuntImg from "../../images/flagship_events/Treasure Hunt.jpg";
import WorkshopIMG from "../../images/flagship_events/Workshops.jpg";
import Maaz from '../../images/flagship_events/Maaz-Bin-Bilal.jpg'

import "./Homepage-Slider.css"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex w-full h-full`}
  }
  .slick-slide {
    ${tw`w-full h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 flex-1 flex flex-col justify-between sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;


const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const Rating = tw.span`ml-2 font-bold`;
//const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;
const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: kaviSammelanImg,
      title: "Kavi Sammelan",
      description: `‘Kavyamaye ho uthega dil, jab sajegi kaviyon ki meil’.`,
      date: "TVVVVVVVVVV",
      timing: "08:00 PM - 10:00 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
    },
    {
      imageSrc: StandupIMG,
      title: "Standup Comedy",
      description: `Come and join us for an evening glimmered with sarcasm and humour, brought to you by one of the finest comics in the country and fill the evening with giggles and hootings.A comedic performance to a live audience, saturated with jokes and sarcasm with one of the best standup comics out there to entertain you.`,
      date: "TBD",
      timing: "09:00 PM - 10:30 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
    },
    {
      imageSrc: musicshowImg,
      title: "Folk Music + Puppet Show",
      description: `The term folk music and its equivalents in other languages denote many different kinds of music; the meaning of the term varies according to the part of the world, social class, and period of history. Doing justice to this year’s theme, Kaleidoscopes, Aaftaab will organise a Folk Music and Puppet Show, that will host regional folk musicians to celebrate the beauty and soulfulness of Rajasthani Folk Music. Join us as we immerse ourselves in resonating sounds of traditional instruments and the stories told by these musical storytellers.`,
      date: "TBD",
      timing: "06:00 PM - 07:00 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
    },
    {
      imageSrc: djImg,
      title: "DJ Night",
      description: `As we reach the end of the festivities, join us, for one last celebration , as we embrace EDM and Hip Hop music, and dance to our hearts content!`,
      date: "TBD",
      timing: "08:30 PM - 11:00 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
    },
    {
      imageSrc: BookImg,
      title: "Regional Literature Colloquim",
      date: "TBD",
      timing: "04:00 PM - 05:30 PM",
      description: `Want to know how an idea is turned into a novel ?
      We bring to you the joy of hearing an author tell the biography of their book.
      Join us and get the chance to interact with a big name of the literaly world and get your own signed copy of the book.`,
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
    },
    {
      imageSrc: InterviewImg,
      title: "Interview with Director",
      description: `Ever wondered whether the Director of such a prestigious institute eats like us, lives like us or enjoys like us? Well, we present a one-on-one interview with the director complete with a set of unique and out-of-the-box questions. Come and see what he has to say! An interview with the director in front of the entire college that help us get to know him from a different perspective.`,
      date: "TBD",
      timing: "04:30 PM - 05:30 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
    },
    {
      imageSrc: Maaz,
      title: "Book Signing by Maaz Bin Bilal",
      date: "TBD",
      timing: "02:30 PM - 04:00 PM",
      // price: "₹50",
      description: `
      Aaftaab is here with the book signing event of the book “Temple Lamp- Verses of Banaras”, a Persian to English translation of Mirza Galib's "Chirag-e-Diar" by Mr. Maaz Bin Bilal.
      Join us and get the chance to envision the colours of Kahi as described by Mirza Galib from the author Mr. Bilal himself.`,
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
    },
    {
      imageSrc: TreasurehuntImg,
      title: "Treasure Hunt",
      description: `Life is a treasure hunt game. You have to solve the clues from incidents that happened and move further to find the ultimate fortune. So are you into solving the clues and making your way through the wilderness in the pursuit of long lost treasure/ fortune ? We offer you all this thrilling experience in Aaftaab 2022’s very own “ClueMinati”. In “ClueMinati”  you will be given clues which will lead you to the ultimate treasure. Players with the aid of clues will  compete in trying to find the hidden treasure.`,
      date: "TBD",
      timing: "06:00 PM - 08:00 PM",
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 1,
      maxTeamSize: 3,
      isFlagship: true,
      prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
      ruleBookLink: "",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Unplugged Night",
      description: `Tune in to watch Sangam, the music club of IIT Jodhpur, fill the air with magical, melodious music.`,
      date: "TBD",
      timing: "10:00 PM - 11:00 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1485814837398-ed2048f57499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Open Mic",
      description: `This is your chance to grab the mic and showcase your talent to a wide audience! So what are you waiting for? The stage is set, and it is all yours...`,
      date: "TBD",
      timing: "05:30 PM - 07:30 PM",
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 1,
      maxTeamSize: 1,
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1583318432730-a19c89692612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      title: "Prom Night",
      description: `The perfect opportunity for you and your significant other, to spend some time together, and live the ultimate teenage romance dream.`,
      date: "TBD",
      timing: "10:30 PM - 11:30 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    // {
    //   imageSrc: WorkshopIMG,
    //   title: "Workshops",
    //   date: "30/09/22",
    // },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Flagship Events</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <div className="Card" key={index}>
            {/* <Card key={index}> */}
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer className="CardTitle">
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  { card.locationText ?
                    <IconWithText>
                      <IconContainer>
                        <LocationIcon />
                      </IconContainer>
                      <Text>{card.locationText}</Text>
                    </IconWithText>
                    :null
                  }
                  { card.date ?
                    <IconWithText>
                      <IconContainer>
                        <DateIcon />
                      </IconContainer>
                      <Text>{card.date}</Text>
                    </IconWithText>
                    : null
                  }
                </SecondaryInfoContainer>
                {/* <Description>{card.description}</Description> */}
              </TextInfo>
              <Link 
                to={{
                  pathname: "/eventDetails",
                  search: `?name=${card.title}`,
                  state: card
                }}
              >
                <PrimaryButton>Check out now</PrimaryButton>
              </Link>
            {/* </Card> */}
            </div>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
