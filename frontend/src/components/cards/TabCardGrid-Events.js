import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

import { motion as framerMotion} from "framer-motion";
import Maaz from '../../images/flagship_events/Maaz-Bin-Bilal.jpg'
import musicshowImg from "../../images/flagship_events/folk_music.jfif";
import 'typeface-poppins';





const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)`font-poppins`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.div)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0 `;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t overflow-hidden`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
  opacity: 0;
  height: 0;
`;
const CardButton = tw(PrimaryButtonBase)`text-sm font-sans`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900 font-poppins`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500 font-poppins`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 font-poppins`;
const CardPrice = tw.p`mt-4 text-xl font-bold font-poppins`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Event Schedule",
  tabs = {
    Day1 : [
      {
        imageSrc:
          "https://kavisammelanlive.com/wp-content/uploads/2020/05/new-logo.png",
        title: "Welcome Ceremony",
        description: `Lamp lighting,Director's address,Felicitations,FC address`,
        date: "TBD",
        timing: "9:15 AM",
        // price: "₹50",
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc:
          "https://media.istockphoto.com/vectors/stand-up-comedy-show-is-a-neon-sign-neon-symbol-symbol-bright-banner-vector-id910152132?k=20&m=910152132&s=612x612&w=0&h=fOngvbE0ar3mStiaosLhPut-qqSfqdRj4LNP4Atk8Ac=",
        title: "Musical Performance",
        description: `Tentative`,
        date: "TBD",
        timing: "09:15 AM - 9:20 AM",
        // price: "₹50",
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#",
      },
      {
        imageSrc: musicshowImg,
        // imageSrc:
        //   "https://images.unsplash.com/photo-1610659606489-77967e40fa35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "Speaker Sessions",
        description: `Panel Discussions`,
        date: "TBD",
        timing: "9:20 AM - 10:30 AM",
        // price: "₹50",
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRqJTIwbmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Quiz",
        description: `MELA(Culture & Heritage) Quiz by Major Chandrakant Nair`,
        date: "TBD",
        timing: "11:00 AM - 1:00 PM",
        // price: "₹50",
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc: Maaz,
        // imageSrc: 
        //   "https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGJvb2slMjBzaWduaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Hindi/English Writing Competition",
        date: "TBD",
        timing: "11:00 AM - 1:00 PM",
        // price: "₹50",
        description: `Essay writing - 1000/1500 words limit`,
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1538449327350-43b4fcfd35ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGludGVydmlldyUyMHdpdGglMjBkaXJlY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Word Games",
        description: `Popular word games like Anagrams,Rebuses,Puns,etc. `,
        date: "TBD",
        timing: "02:00 PM - 04:030 PM",
        // price: "₹50",
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGJvb2slMjBzaWduaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Hindi/English Slam Poetry",
        date: "TBD",
        timing: "02:00 PM - 04:00 PM",
        description: `Poetry recitation Event(Participants can recite either a hindi or an english poem)`,
        // price: "₹50",
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc:
          "https://thumbs.dreamstime.com/b/old-map-vintage-travel-equipment-expedition-concept-treasure-hunt-holiday-gifts-old-map-vintage-travel-equipment-133932740.jpg",
        title: "JAM",
        description: `Oratory Event(Detailed rules will be shared later)`,
        date: "TBD",
        timing: "04:00 PM - 05:00 PM",
        // price: "₹50",
        registrableEvent: true,
        minTeamSize: 3,
        maxTeamSize: 5,
        isFlagship: true,
        prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Photograph Description Contest",
        description: `Creative Description of an image/scenery in hindi or english`,
        date: "TBD",
        timing: "4:00 PM - 5:00 PM",
        // price: "₹50",
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc:
          "https://cf.bstatic.com/data/xphoto/1182x887/440/44045903.jpg?size=S",
        title: "Kavi Sammelan",
        date: "TBD",
        timing: "05:30 PM - 07:30 PM",
        description: ` Four  eminent poets, writing in diverse languages `,
        // price: "₹50",
        isFlagship: false,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1485814837398-ed2048f57499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Theatre",
        description: `Vikas Kapoor Theatre Group`,
        date: "TBD",
        timing: "07:30 PM onwards",
        // price: "₹50",
        registrableEvent: true,
        minTeamSize: 1,
        maxTeamSize: 1,
        isFlagship: true,
        prize: "",
        ruleBookLink: "",
        url: "#"
      },
      // {
      //   imageSrc:
      //     "https://images.unsplash.com/photo-1583318432730-a19c89692612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      //   title: "Prom Night",
      //   description: `The perfect opportunity for you and your significant other, to spend some time together, and live the ultimate teenage romance dream.`,
      //   date: "TBD",
      //   timing: "10:30 PM - 11:30 PM",
      //   // price: "₹50",
      //   isFlagship: true,
      //   prize: "",
      //   ruleBookLink: "",
      //   url: "#"
      // },
      // {
      //   imageSrc:
      //     "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3Nob3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      //   title: "Workshops",
      //   // timing: "XX:XX AM - XX:XX PM ",
      //   // price: "₹50",
      //   isFlagship: true,
      //   prize: "",
      //   ruleBookLink: "",
      //   url: "#"
      // }
    ],
    // Day1: getDay1Cards(),
    // Day2: getDay2Cards(),
    // Day3: getDay3Cards()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its timing (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
   

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
                
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
            // whileHover={{ rotate: 5 }} // Adjust the hover animations
          >
            {tabs[tabKey].map((card, index) => (
                <CardContainer key={index} whileHover={{ scale: 1.05 }}>
                 {/* <Link to="/eventDetails" state={card}> */}
                 <Link to={{
                  pathname: "/eventDetails",
                  search: `?name=${card.title}`,
                  state: card
                 }}>
                  <Card className="group" href={card.url} initial="rest" whileHover={{scale:1.1}} animate="rest">
                    <CardImageContainer imageSrc={card.imageSrc}>
                      {/* <CardRatingContainer>
                        <CardRating>
                          <StarIcon />
                          {card.rating}
                        </CardRating>
                        <CardReview>({card.reviews})</CardReview>
                      </CardRatingContainer> */}
                      {
                        card.price ?
                        <CardHoverOverlay
                          variants={{
                            hover: {
                              opacity: 1,
                              height: "auto"
                            },
                            rest: {
                              opacity: 0,
                              height: 0
                            }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardButton>Register Now!</CardButton>
                        </CardHoverOverlay>
                        : null
                      }
                    </CardImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      {tabKey=="Day1" && <CardContent>{card.date}</CardContent>}
                      <CardContent>{card.timing}</CardContent>
                      {card.price ? <CardPrice>{card.price}</CardPrice> : null}
                    </CardText>
                  </Card>
                 </Link>
                </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

// const getDay1Cards = () => {
//   const cards = [
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1598594661945-d7e693e4522c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//       title: "Lamp Lighting and Kick Off",
//       date: "TBD",
//       timing: "05:00 PM - 06:00 PM",
//       // price: "₹50",
//       description: `With each passing minute we are getting closer to the magical world of literature. Join us and witness the grand fire start. Ready to roll?? Lets go...."Aagaz!" As the wick of the lamp catches a spark and unflurs it into a luminous flame that's when we mark the onset of Aaftaab 2022 and its Fame.   -- A formal start of the fest "Aaftaab" with a lamp lighting ceremony.`,
//       isFlagship: false,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc: musicshowImg,
//       // imageSrc:
//       //   "https://images.unsplash.com/photo-1610659606489-77967e40fa35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//       title: "Folk Music + Puppet Show",
//       description: `The term folk music and its equivalents in other languages denote many different kinds of music; the meaning of the term varies according to the part of the world, social class, and period of history. Doing justice to this year’s theme, Kaleidoscopes, Aaftaab will organise a Folk Music and Puppet Show, that will host regional folk musicians to celebrate the beauty and soulfulness of Rajasthani Folk Music. Join us as we immerse ourselves in resonating sounds of traditional instruments and the stories told by these musical storytellers.`,
//       date: "TBD",
//       timing: "06:00 PM - 07:00 PM",
//       // price: "₹50",
//       isFlagship: true,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     // {
//     //   imageSrc:
//     //     "https://kavisammelanlive.com/wp-content/uploads/2020/05/new-logo.png",
//     //   title: "Welcome Ceremony",
//     //   description: `Lamp lighting,Director's address,Felicitations,FC address`,
//     //   date: "TBD",
//     //   timing: "9:15 A.M.",
//     //   // price: "₹50",
//     //   isFlagship: true,
//     //   prize: "",
//     //   ruleBookLink: "",
//     //   url: "#"
//     // },
//     // {
//     //   imageSrc:
//     //     "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     //   title: "Unplugged Night",
//     //   description: `Tune in to watch Sangam, the music club of IIT Jodhpur, fill the air with magical, melodious music.`,
//     //   date: "30/09/22",
//     //   timing: "10:00 PM - 11:00 PM",
//     //   // price: "₹50",
//     //   isFlagship: true,
//     //   prize: "",
//     //   ruleBookLink: "",
//     //   url: "#"
//     // }
//   ];

//   // Shuffle array
//   return cards;
// };

// const getDay2Cards = () => {
//   const cards = [
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGViYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       title: "Hindi Debate/Hindi Extempore",
//       date: "TBD",
//       timing: "09:00 AM - 10:30 AM",
//       description: `"Tu-Tu Mai-Mai": Bring out the debater in you and flaunt your speaking skills in a parliamentary setup but this time with all the feels because the debate's in Hindi! A parliamentary format debate in Hindi where teams will be given a topic and they will have to present arguments, in hindi, for or against the topic and they will be judged on a fixed set of parameters.`,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 2,
//       maxTeamSize: 3,
//       isFlagship: false,
//       prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2NyaXB0JTIwdG8lMjB2aWRlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//       title: "Script to Video (Video Making Workshop)",
//       date: "TBD",
//       timing: "10:00 AM - 11:30 AM",
//       // price: "₹50",
//       description:`Christian Bale – or Batman once said: “I only sound intelligent when there’s a good script writer around." Always wanted to visualize your words? This is your chance. IIT Jodhpur will be organizing a video-making workshop this Aaftaab. Here we will be hosting a ‘Script to Video’ event where you will be guided by highly experienced mentors on how to convert your own script to videos. Join us to learn the nuances of video production and gain exclusive, behind the scenes information from some of the biggest names in the film and video industry.`,
//       registrableEvent: true,
//       minTeamSize: 1,
//       maxTeamSize: 1,
//       isFlagship: false,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://lettering-daily.b-cdn.net/wp-content/uploads/2018/09/me-doing-calligraphy-2.jpg",
//       title: "Spill the Ink (Creative Writing Workshop)",
//       date: "TBD",
//       timing: "10:00 AM - 11:30 AM",
//       description: `Have you always had a “Creative Knack” but felt like you were unable to express yourself? This is your chance! Welcome to “Spill the Ink”: A creative writing workshop where you will be guided to pen down your thoughts in a lucrative way, to help do justice to the author within. `,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 1,
//       maxTeamSize: 1,
//       isFlagship: false,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     // {
//     //   imageSrc:
//     //     "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     //   title: "Public Speaking Workshop",
//     //   date: "01/10/22",
//     //   timing: "10:00 AM - 11:00 AM",
//     //   // price: "₹50",
//     //   description: `Are you someone who prepares the entire night for hosting the next day, and then BAM!: You forget everything when you perform? Well fear not, for we will be hosting a “Public Speaking” workshop where you will be carefully instructed on the subtle art of speaking in front of an audience. Just like how the mirrors of kaleidoscopes mimic the spectrum, we will help you carve all aspects from body language, to speech articulation to persuasive speaking.So, let’s not waste this opportunity because "Good fortune is what happens when opportunity meets planning!!"`,
//     //   isFlagship: false,
//     //   prize: "",
//     //   ruleBookLink: "",
//     //   url: "#"
//     // },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1529251333259-d36cccaf22ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ldHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       title: "Verse Come Verse Serve (Prompt Poetry)",
//       date: "TBD",
//       timing: "11:30 AM - 01:00 PM",
//       description: `Poems! The most beautiful way to write your hearts down on a piece of paper. Slow and steady, isn’t it?
//       But! But! But! Aaftaab is here with “Verse Come Verse Serve”, an on-the-spot poem writing competition.
//       Come and showcase your creativity and poetic skills but this time with less time.`,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 1,
//       maxTeamSize: 1,
//       isFlagship: false,
//       prize: "1st: ₹3000, 2nd: ₹2000, 3rd: ₹1000",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://t4.ftcdn.net/jpg/01/43/63/85/360_F_143638577_5v5T16Ju2yTrQO9aOsfspHA3SV7xQYkM.jpg",
//       title: "Noob Quiz",
//       date: "TBD",
//       timing: "11:30 AM - 01:00 PM",
//       description: `QUIZ? Meh, I'll skip the "nerdy" stuff. 
//       Well, NOOB QUIZ is here to break that myth. Show off your quizzing skills by cracking the questions with the most basic knowledge and bag flashy prizes. A proper quiz with teams that'll face each other off in a fierce battle of questions and answers.`,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 3,
//       maxTeamSize: 5,
//       isFlagship: false,
//       prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1605429201125-37e867327609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmRzJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//       title: "Are Your Words-Worth?(Word Games)",
//       date: "TBD",
//       timing: "02:30 AM - 04:00 PM",
//       description: `Are you someone who boasts about your literary and vocabulary skills? Do you think you're witty with your puns? Come and be a part of “Are Your Words-Worth” where your wordplay skills will be pushed to the limits! 
//       Be a part of a series of word games which will test your quick thinking skills, vocabulary and imagination.`,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 3,
//       maxTeamSize: 5,
//       isFlagship: false,
//       prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc: Maaz,
//       // imageSrc:
//       //   "https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGJvb2slMjBzaWduaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//       title: "Book Signing by Maaz Bin Bilal ",
//       date: "TBD",
//       timing: "02:30 AM - 04:00 PM",
//       description: `
//       Aaftaab is here with the book signing event of the book “Temple Lamp- Verses of Banaras”, a Persian to English translation of Mirza Galib's "Chirag-e-Diar" by Mr. Maaz Bin Bilal.
//       Join us and get the chance to envision the colours of Kahi as described by Mirza Galib from the author Mr. Bilal himself.`,
//       // price: "₹50",
//       isFlagship: false,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1538449327350-43b4fcfd35ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGludGVydmlldyUyMHdpdGglMjBkaXJlY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//       title: "Interview with Director",
//       description: `Ever wondered whether the Director of such a prestigious institute eats like us, lives like us or enjoys like us? Well, we present a one-on-one interview with the director complete with a set of unique and out-of-the-box questions. Come and see what he has to say! An interview with the director in front of the entire college that help us get to know him from a different perspective.`,
//       date: "TBD",
//       timing: "04:30 PM - 05:30 PM",
//       // price: "₹50",
//       isFlagship: true,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://thumbs.dreamstime.com/b/old-map-vintage-travel-equipment-expedition-concept-treasure-hunt-holiday-gifts-old-map-vintage-travel-equipment-133932740.jpg",
//       title: "Clueminati (Treasure Hunt)",
//       description: `Life is a treasure hunt game. You have to solve the clues from incidents that happened and move further to find the ultimate fortune. So are you into solving the clues and making your way through the wilderness in the pursuit of long lost treasure/ fortune ? We offer you all this thrilling experience in Aaftaab 2022’s very own “ClueMinati”. In “ClueMinati”  you will be given clues which will lead you to the ultimate treasure. Players with the aid of clues will  compete in trying to find the hidden treasure.`,
//       date: "TBD",
//       timing: "06:00 PM - 08:00 PM",
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 3,
//       maxTeamSize: 5,
//       isFlagship: true,
//       prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://media.istockphoto.com/vectors/stand-up-comedy-show-is-a-neon-sign-neon-symbol-symbol-bright-banner-vector-id910152132?k=20&m=910152132&s=612x612&w=0&h=fOngvbE0ar3mStiaosLhPut-qqSfqdRj4LNP4Atk8Ac=",
//       title: "Standup Comedy",
//       // description: `glimmered with sarcasm and humour, brought to you by one of the finest comics in the country and fill the evening with giggles and hootings.A comedic performance to a live audience, saturated with jokes and sarcasm with one of the best standup comics out there to entertain you.`,
//       date: "TBD",
//       timing: "09:00 PM - 10:30 PM",
//       // price: "₹50",
//       isFlagship: true,
//       prize: "",
//       ruleBookLink: "",
//       url: "#",
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//       title: "Unplugged Night",
//       description: `Tune in to watch Sangam, the music society of IIT Jodhpur, fill the air with magical, melodious music.`,
//       date: "TBD",
//       timing: "10:00 PM - 11:00 PM",
//       // price: "₹50",
//       isFlagship: true,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     }
//   ];

//   return cards;
// };

// const getDay3Cards = () => {
//   const cards = [
//     {
//       imageSrc:
//         "data:image/jpeg;base64,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",
//       title: "Just A Minute Speech",
//       date: "TBD",
//       timing: "09:30 AM - 11:30 AM",
//       // price: "₹50",
//       description: `Imagine "One minute" deciding your fate. Appalling, isnt it? Everyone can give a speech, but who can give a speech under a minute? Let's find out in "Just A Minute Speech" where people will scrabble for their words when the clock is ticking. Here the topic is not your opponent, time is. Come beat the time and prove your worth!!  -- A one minute time limiting speech in which one has to begin, prove the point and conclude the speech.`,
//       registrableEvent: true,
//       minTeamSize: 3,
//       maxTeamSize: 5,
//       isFlagship: false,
//       prize: "1st: ₹3000, 2nd: ₹2000, 3rd: ₹1000",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY3Vzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//       title: "In Pursuit Of Dispute (English Debate)",
//       description: `It is better to debate a question without settling it than to settle a question without debating it. This aaftaab, unveil the debater inside you by pitching your matter, method and manner in the “English Debate” competition! Do participate and win exciting prizes!!`,
//       date: "TBD",
//       timing: "09:30 AM - 11:30 AM",
//       // price: "₹50",
//       // description: ``,
//       registrableEvent: true,
//       minTeamSize: 2,
//       maxTeamSize: 3,
//       isFlagship: false,
//       prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWN0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//       title: "Nautanki Saala (Acting Workshop)",
//       date: "TBD",
//       timing: "10:00 AM - 11:30 AM",
//       description: `Are you someone who has always wanted to act and perform? Well this is the perfect opportunity for you to hone your skills.Aaftaab will be hosting “Nautanki Saala”, an acting workshop for all those who want to learn the art of acting. Workshops are ideal for stage beginners of every age who want to take a sip before diving in deep."Nautanki Saala" allows students to participate in a short training workshop that demands full immersion into learning the craft of acting.No significant prior experience or knowledge is required/assumed.`,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 1,
//       maxTeamSize: 1,
//       isFlagship: false,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://www.masslive.com/resizer/m176uZZphwNxHcRNQBtkSe3smO0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/M4SOSTKFBBELJNJQOQHEDGF4UU.jpg",
//       title: "What If They Met (Prompt based character re-enactment)",
//       date: "TBD",
//       timing: "11:30 AM - 01:00 PM",
//       description: `What if Hermione meets Bella? What if Frodo meets SpiderMan? Let your imagination run wild! “What If They Met” is not only a place where characters come to life but also where two characters from different dimensions meet and converse. How will the story unfold? Will it change our perception of the entire universe? Come, participate and witness!
//       Each participant will have to re-enact the character assigned to him/her on stage along with one other participant who will have been assigned a character completely unrelated to the first character. Let us witness how this act unfolds!`,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 3,
//       maxTeamSize: 5,
//       isFlagship: false,
//       prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://wallpaperaccess.com/full/6793384.jpg",
//       title: "Mythology quiz",
//       date: "TBD",
//       timing: "11:30 AM - 01:00 PM",
//       description: `How much do you know when it comes to mythology? There are myths which are believed to tend to become true, defining mythology as the sacred history of humanity… Let’s come together to participate in the mythology quiz and explore a world full of myths.`,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 3,
//       maxTeamSize: 5,
//       isFlagship: false,
//       prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGJvb2slMjBzaWduaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//       title: "Regional Literature Colloquim",
//       date: "TBD",
//       timing: "04:00 PM - 05:30 PM",
//       description: `Want to know how an idea is turned into a novel ?
//       We bring to you the joy of hearing an author tell the biography of their book.
//       Join us and get the chance to interact with a big name of the literaly world and get your own signed copy of the book.`,
//       // price: "₹50",
//       isFlagship: true,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://cf.bstatic.com/data/xphoto/1182x887/440/44045903.jpg?size=S",
//       title: "Theatre Performance",
//       date: "TBD",
//       timing: "02:30 PM - 04:00 PM",
//       description: `Movies will make you famous; Television will make you rich;  but Theater will make you expressive! Theater is akin to a kaleidoscope of patterns filled with characters, voices, emotions, movements, languages, metaphors and much more!!! Aaftaab'22 will therefore be hosting a theater performance to enrich the audience. We will have a performance that entails acting, singing, dance and music, dialogues, narration, recitation with a touch of puppetry or pantomime, and we are certain that it will leave you absolutely spellbound! So what are you waiting for? Grab a seat, because the show is about to begin...`,
//       // price: "₹50",
//       isFlagship: false,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://theeventsgroup.co.nz/wp-content/uploads/2017/09/Lets-Get-Quizical-Logo-Square-3-1024x1024.jpg",
//       title: "Let's Get Quizzical (MELA Quiz)",
//       date: "TBD",
//       timing: "04:00 PM - 05:00 PM",
//       description: `Quizzes are fun,a themed quiz even more! Here's a chance to flaunt your knowledge about al things entertainment and enjoy the wonders the theme has to show you!  The "MELA Quiz"  is theme based quiz on all things Music, Entertainment, Literature and Arts.`,
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 3,
//       maxTeamSize: 5,
//       isFlagship: false,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1485814837398-ed2048f57499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//       title: "Open Mic",
//       description: `This is your chance to grab the mic and showcase your talent to a wide audience! So what are you waiting for? The stage is set, and it is all yours...`,
//       date: "TBD",
//       timing: "05:30 PM - 07:30 PM",
//       // price: "₹50",
//       registrableEvent: true,
//       minTeamSize: 1,
//       maxTeamSize: 1,
//       isFlagship: true,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRqJTIwbmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       title: "DJ Night",
//       description: `As we reach the end of the festivities, join us, for one last celebration , as we embrace EDM and Hip Hop music, and dance to our hearts content!`,
//       date: "TBD",
//       timing: "08:30 PM - 11:00 PM",
//       // price: "₹50",
//       isFlagship: true,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1583318432730-a19c89692612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
//       title: "Prom Night",
//       description: `The perfect opportunity for you and your significant other, to spend some time together, and live the ultimate teenage romance dream.`,
//       date: "TBD",
//       timing: "10:30 PM - 11:30 PM",
//       // price: "₹50",
//       isFlagship: true,
//       prize: "",
//       ruleBookLink: "",
//       url: "#"
//     },
//   ];

//   return cards;
// };

// /* This function is only there for demo purposes. It populates placeholder cards */
// const getRandomCards = () => {
//   const cards = [
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//       title: "Event alpha",
//       timing: "Chicken Main Course",
//       price: "$5.99",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//       title: "Event beta",
//       timing: "Fried Mexican Beef",
//       price: "$3.99",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//       title: "Event charlie",
//       timing: "Chilli Crispy Nachos",
//       price: "$3.99",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//       title: "Event delta",
//       timing: "Mexican Chilli",
//       price: "$3.99",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//       title: "Event echo",
//       timing: "Deepfried Chicken",
//       price: "$2.99",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//       title: "Event foxtrot",
//       timing: "Hamburger & Fries",
//       price: "$7.99",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//       title: "Event gamma",
//       timing: "Crispy Soyabeans",
//       price: "$8.99",
//       url: "#"
//     },
//     {
//       imageSrc:
//         "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//       title: "Event sigma",
//       timing: "Roasted Chicken & Egg",
//       price: "$7.99",
//       url: "#"
//     }
//   ];

//   // Shuffle array
//   return cards.sort(() => Math.random() - 0.5);
// };
