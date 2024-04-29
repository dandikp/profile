import { useGSAP } from '@gsap/react';
import { EmailOutlined } from '@mui/icons-material';
import { useMediaQuery } from '@uidotdev/usehooks';
import gsap from 'gsap';
import React, { Fragment, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationLink from '../../atoms/NavigationLink/NavigationLink';
import MobileMenu from '../MobileMenu/MobileMenu';
import {
  Contact,
  ContactText,
  Container,
  Logo,
  LogoText1,
  LogoText2,
  NavWrapper,
  Navigation,
  ReachMeOut,
  Wrapper,
} from './Header.style';
import Hamburger from '../../atoms/Hamburger/Hamburger';

const Header = () => {
  const location = useLocation();
  const wrapperRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const tl = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLgDvc = useMediaQuery(
    'only screen and (min-width: 992px) and (max-width: 1279px)',
  );
  const isXLDvc = useMediaQuery('only screen and (min-width: 1280px)');
  const isLargeScreen = isLgDvc || isXLDvc;

  const onClickHandler = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to('.content-container', {
      y: 80,
      duration: 0,
    });
    tl.current.to(document.body, {
      overflowY: 'hidden',
      duration: 0,
    });

    tl.current.to(wrapperRef.current, {
      backgroundColor: '#000',
      position: 'fixed',
      zIndex: 1000,
      top: 0,
      height: '100dvh',
      padding: '26px 20px',
      duration: 0.3,
      autoAlpha: 1,
    });
  });

  useGSAP(() => {
    if (isMenuOpen) tl.current.play();
    else tl.current.reverse();
  }, [isMenuOpen]);

  return (
    <Wrapper ref={wrapperRef}>
      <Container>
        <Logo to="/" title="About">
          <LogoText1>dandi</LogoText1>
          <LogoText2>pratama</LogoText2>
        </Logo>

        {isLargeScreen ? (
          <Fragment>
            <NavWrapper>
              <Navigation>
                <NavigationLink
                  to="/"
                  title="About"
                  active={location.pathname === '/' ? 1 : ''}>
                  About
                </NavigationLink>
                <NavigationLink
                  to="/works"
                  title="Works"
                  active={location.pathname === '/works' ? 1 : ''}>
                  Works
                </NavigationLink>
              </Navigation>
            </NavWrapper>
            <Contact>
              <ContactText>Let's connect.</ContactText>
              <ReachMeOut href="mailto:dandi.karunia@gmail.com">
                <EmailOutlined />
                Contact Me
              </ReachMeOut>
            </Contact>
          </Fragment>
        ) : (
          <Hamburger active={isMenuOpen} onClick={onClickHandler} />
        )}
      </Container>

      {!isLargeScreen && (
        <MobileMenu
          ref={mobileMenuRef}
          active={isMenuOpen}
          activeMenu={location.pathname}
          onClick={onClickHandler}
        />
      )}
    </Wrapper>
  );
};

export default Header;
