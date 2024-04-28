import React, { useState } from 'react';
import { BottomPatty, TopPatty, Wrapper } from './Hamburger.style';

const Hamburger = ({ active, onClick }) => {
  const onClickHandler = () => {
    if (typeof onClick === 'function') onClick();
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <TopPatty active={active ? 1 : 0} />
      <BottomPatty active={active ? 1 : 0} />
    </Wrapper>
  );
};

export default Hamburger;
