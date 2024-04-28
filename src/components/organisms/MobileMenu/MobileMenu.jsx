import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { Fragment } from 'react';
import { ContactMe, Container, Navigation } from './MobileMenu.style';
import NavigationLink from '../../atoms/NavigationLink/NavigationLink';

const MobileMenu = ({ active, activeMenu, onMenuClick }) => {
  // const
  return (
    <Fragment>
      <Container>
        <Navigation>
          <NavigationLink to="/" active={activeMenu === '/' ? 1 : ''}>
            About
          </NavigationLink>
          <NavigationLink to="/works" active={activeMenu === '/works' ? 1 : ''}>
            Works
          </NavigationLink>
        </Navigation>
        <ContactMe></ContactMe>
      </Container>
    </Fragment>
  );
};

export default MobileMenu;
