import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import styled from 'styled-components';

const Content = styled.div`
  min-height: 100dvh;
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const SiteTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <Content className="content-container">{children}</Content>
      <Footer />
    </>
  );
};

export default SiteTemplate;
