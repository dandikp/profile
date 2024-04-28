import { useMediaQuery } from '@uidotdev/usehooks';
import React, { useState } from 'react';
import {
  Decoration,
  InteractiveDecoration,
  NavLink,
  Wrapper,
} from './NavigationLink.style';

const NavigationLink = ({ children, active, ...props }) => {
  const [isHover, setIsHover] = useState(false);
  const isLgDvc = useMediaQuery('only screen and (min-width: 992px)');

  const mouseEnterHandler = (e) => {
    setIsHover(true);
  };

  const mouseLeaveHandler = (e) => {
    setIsHover(false);
  };

  return (
    <Wrapper onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <NavLink {...props}>{children}</NavLink>
      {isLgDvc && active && <Decoration />}
      {isLgDvc && !active && <InteractiveDecoration active={isHover} />}
    </Wrapper>
  );
};

export default NavigationLink;
