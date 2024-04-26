import { EmailOutlined } from '@mui/icons-material';
import { useMediaQuery } from '@uidotdev/usehooks';
import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationLink from '../../atoms/NavigationLink/NavigationLink';
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
  let location = useLocation();
  const isSmDvc = useMediaQuery('only screen and (max-width: 767px)');
  const isMdDvc = useMediaQuery(
    'only screen and (min-width: 768px) and (max-width: 991px)',
  );
  const isLgDvc = useMediaQuery(
    'only screen and (min-width: 992px) and (max-width: 1279px)',
  );
  const isXLDvc = useMediaQuery('only screen and (min-width: 1280px)');
  const isLargeScreen = isLgDvc || isXLDvc;

  return (
    <Wrapper>
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
                  active={location.pathname === '/' ? 1 : 0}>
                  About
                </NavigationLink>
                <NavigationLink
                  to="/works"
                  title="Works"
                  active={location.pathname === '/works' ? 1 : 0}>
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
          <Hamburger />
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
