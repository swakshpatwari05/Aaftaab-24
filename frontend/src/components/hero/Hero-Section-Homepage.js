import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import "./Hero-Section-Homepage.css"
import { css } from "styled-components/macro";
import { Link } from 'react-router-dom';

import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import DesignIllustration from "../../images/design-illustration.svg";

import heroImgTitle from '../../images/old-logo-text.png'
import heroImgTL from '../../images/Logo2024-top-left.png'
import heroImgTR from '../../images/Logo2024-top-right.png'
import heroImgBL from '../../images/Logo2024-bottom-left.png'
import heroImgBR from '../../images/Logo2024-bottom-right.png'

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col-reverse lg:flex-row md:items-center max-w-screen-xl mx-auto py-5 lg:py-10 md:py-8`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-0 mb-12 lg:mt-0 lg:mb-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-semibold text-secondary-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export default ({
  heading = "Header Text",
  description="Small description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  primaryButtonText="Register Now",
  primaryButtonUrl="#",
  watchVideoButtonText="Watch Video",
  watchVideoYoutubeUrl="https://www.instagram.com/tv/CiLnz8Xg6Zh/?utm_source=ig_web_copy_link",
  imageSrc=DesignIllustration,
  imageCss=null,
  imageDecoratorBlob = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <Link to="/register">
                <PrimaryButton as="a">{primaryButtonText}</PrimaryButton>
              </Link>
              <WatchVideoButton onClick={()=>{
                //redirect to youtube
                window.open(watchVideoYoutubeUrl, '_blank');
              }}>
                <span className="playIconContainer">
                  <PlayIcon className="playIcon" />
                </span>
                <span className="playText">{watchVideoButtonText}</span>
              </WatchVideoButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              {/* <img
                css={imageCss}
                src={imageSrc}
                alt="Hero"
              /> */}
              <div className="heroLogo">
                <div className="container">
                  <div className="part row1">
                    <img className="logo2 logo" src={heroImgTL} />
                    <img className="logo1 logo" src={heroImgTR} />
                  </div>
                  <div className="part row2">
                    <img className="logo3 logo" src={heroImgBL} />
                    <img className="logo4 logo" src={heroImgBR} />
                  </div>
                </div>
                <div className="heroTitle">
                  <img className="heroTitleImg" css={imageCss} src={heroImgTitle} />
                </div>
              </div>
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal>
      </Container>
    </>
  );
};
