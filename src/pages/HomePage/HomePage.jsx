import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import SiteTemplate from '../../components/templates/SiteTemplate/SiteTemplate';
import {
  Hero,
  HeroItem,
  Section,
  SectionContent,
  SectionTitle,
  SectionTitleHolder,
  Subtitle,
  SubtitleHolder,
  Title,
  TitleHolder,
  Wrapper,
} from './HomePage.style';

const HomePage = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        '.title-holder',
        { y: 75 },
        {
          y: 0,
          duration: 2,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        },
      );

      // gsap.to('#root', {
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: document.body,
      //     start: 'top top',
      //     end: 'bottom bottom',
      //     scrub: 1,
      //     invalidateOnRefresh: true,
      //   },
      // });
    },
    { scope: containerRef },
  );

  return (
    <SiteTemplate>
      <Wrapper ref={containerRef}>
        <Section>
          <Hero>
            <HeroItem>
              <TitleHolder className="title-holder">
                <Title>Creative</Title>
              </TitleHolder>
              <TitleHolder className="title-holder">
                <Title>Web</Title>
              </TitleHolder>
              <TitleHolder className="title-holder">
                <Title>Developer</Title>
              </TitleHolder>
            </HeroItem>
            <HeroItem>
              <SubtitleHolder className="title-holder">
                <Subtitle>Currently working at Baleomol.com</Subtitle>
                <Subtitle>(2021 - Present)</Subtitle>
              </SubtitleHolder>
            </HeroItem>
          </Hero>
        </Section>
        <Section>
          <SectionTitleHolder>
            <SectionTitle>About Me</SectionTitle>
            <SectionContent>
              <p>document.body</p>
            </SectionContent>
          </SectionTitleHolder>
        </Section>
      </Wrapper>
    </SiteTemplate>
  );
};

export default HomePage;
