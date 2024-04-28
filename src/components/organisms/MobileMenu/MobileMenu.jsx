import { useGSAP } from '@gsap/react';
import { EmailOutlined } from '@mui/icons-material';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import NavigationLink from '../../atoms/NavigationLink/NavigationLink';
import {
  ContactMe,
  ContactMeText,
  Container,
  NavItem,
  NavLinkHolder,
  Navigation,
  ReachMeOut,
} from './MobileMenu.style';

const MobileMenu = ({ active, activeMenu, onMenuClick }) => {
  const tl = useRef();
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.set('.nav-holder', { y: 75 });
      tl.current = gsap.timeline({ paused: true });
      tl.current.to('.nav-holder', {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
        delay: -0.75,
      });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (active) tl.current.play();
    else tl.current.reverse();
  }, [active]);

  return (
    <Container ref={containerRef}>
      <Navigation className="nav">
        <NavItem>
          <NavLinkHolder className="nav-holder">
            <NavigationLink
              className="nav-link"
              to="/"
              active={activeMenu === '/' ? 1 : ''}>
              About
            </NavigationLink>
          </NavLinkHolder>
        </NavItem>
        <NavItem>
          <NavLinkHolder className="nav-holder">
            <NavigationLink
              className="nav-link"
              to="/works"
              active={activeMenu === '/works' ? 1 : ''}>
              Works
            </NavigationLink>
          </NavLinkHolder>
        </NavItem>
      </Navigation>
      <ContactMe>
        <NavItem>
          <NavLinkHolder className="nav-holder">
            <ContactMeText>Let's connect.</ContactMeText>
          </NavLinkHolder>
        </NavItem>

        <NavItem>
          <NavLinkHolder className="nav-holder">
            <ReachMeOut href="mailto:dandi.karunia@gmail.com">
              <EmailOutlined />
              Contact Me
            </ReachMeOut>
          </NavLinkHolder>
        </NavItem>
      </ContactMe>
    </Container>
  );
};

export default MobileMenu;
