import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
 
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;
 
// Adjusted for dynamic sizing
const CardsContainer = tw.div`flex flex-wrap justify-center -mx-4`;
const Card = styled.div`
  ${tw`mt-24 flex flex-col items-center px-4`}
  width: ${props => props.isLarge ? 'calc(25% - 2rem)' : 'calc(16.66667% - 2rem)'};
`;
 
 
// Use inline styles for dynamic image size based on role
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`bg-no-repeat bg-cover bg-center rounded-full`}
  width: ${props => (props.isLarge ? '240px' : '150px')};
  height: ${props => (props.isLarge ? '240px' : '150px')};
`;
 
 
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
    ${props => !props.isLarge && css`font-size: 0.875rem;`} /* Smaller font size for Assistant Heads */
  }
`;
 
 
const CardLinks = styled.div`
  ${tw`mt-6 flex justify-center`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
      color: ${props => props.iconColor || '#0000ff60'}; /* Fallback color */
    }
  }
`;
 
 
export default ({
  heading = "Meet These Fine Folks.",
  subheading = "",
  cards = []
}) => {
  // Filter cards into two groups
  const heads = cards.filter(card => card.position.toLowerCase().includes("head") && !card.position.toLowerCase().includes("assistant"));
  const assistantHeads = cards.filter(card => card.position.toLowerCase().includes("assistant"));
 
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
        </HeadingContainer>
        {/* Heads */}
        <CardsContainer>
          {heads.map((card, index) => (
            <Card key={index} isHead={true} isLarge={index < 3}> {/* Update here for dynamic class application */}
              <div className="card-image-background">
                <CardImage imageSrc={card.imageSrc} isLarge={true} /> {/* Assume all heads are large */}
              </div>
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.mail ? `mailto:${link.mail}` : link.url} target={link.mail ? "_self" : "_blank"} rel="noopener noreferrer">
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
        {/* Assistant Heads */}
        <CardsContainer>
          {assistantHeads.map((card, index) => (
            <Card key={index}>
              <div className="card-image-background">
                <CardImage imageSrc={card.imageSrc} /> {/* Assistant heads use default size */}
              </div>
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.mail ? `mailto:${link.mail}` : link.url} target={link.mail ? "_self" : "_blank"} rel="noopener noreferrer">
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
 