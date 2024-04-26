import React, { useState } from 'react';
import { BottomPatty, TopPatty, Wrapper } from './Hamburger.style';

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Wrapper onClick={() => setIsActive(!isActive)}>
      <TopPatty active={isActive ? 1 : 0} />
      <BottomPatty active={isActive ? 1 : 0} />
    </Wrapper>
  );
};

export default Hamburger;
