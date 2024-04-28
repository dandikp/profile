import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { Fragment } from 'react';
import { ContactMe, Container, Navigation } from './MobileMenu.style';
import NavigationLink from '../../atoms/NavigationLink/NavigationLink';

const MobileMenu = ({ active, onMenuClick }) => {
  // const
  return (
    <Fragment>
      <Container>
        <Navigation>
          <NavigationLink>About</NavigationLink>
          <NavigationLink>Works</NavigationLink>
        </Navigation>
        <ContactMe></ContactMe>
      </Container>
    </Fragment>
  );
};

export default MobileMenu;
