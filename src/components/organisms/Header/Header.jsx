import { EmailOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react';
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

const Header = () => {
  let location = useLocation();

  return (
    <Wrapper>
      <Container>
        <Logo to="/" title="About">
          <LogoText1>dandi</LogoText1>
          <LogoText2>pratama</LogoText2>
        </Logo>
        <NavWrapper>
          <Navigation>
            <NavigationLink
              to="/"
              title="About"
              active={location.pathname === '/'}>
              About
            </NavigationLink>
            <NavigationLink
              to="/works"
              title="Works"
              active={location.pathname === '/works'}>
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
      </Container>
    </Wrapper>
  );
};

export default Header;
