import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import SiteTemplate from '../../components/templates/SiteTemplate/SiteTemplate';
import {
  Hero,
  HeroItem,
  Section,
  Title,
  TitleHolder,
  Wrapper,
} from './HomePage.style';

const HomePage = () => {
  const tl = useRef();
  const containerRef = useRef();

  useGSAP(
    () => {
      tl.current = gsap.set('.title-holder', { y: 75 });
      tl.current.to('.title-holder', {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
        delay: -0.75,
      });
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
          </Hero>
        </Section>
      </Wrapper>
    </SiteTemplate>
  );
};

export default HomePage;
