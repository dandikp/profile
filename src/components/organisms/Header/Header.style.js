import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 48px;
  min-height: 80px;
  padding: 24px;
  position: relative;
  height: 80px;
  background-color: rgb(26, 26, 26);
  align-items: center;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    gap: 0;
    height: 80px;
    position: relative;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex=wrap: nowrap;
  justify-content: space-between;
  max-width: 1280px;
  gap: 80px;
  height: 28px;
`;

export const Logo = styled(Link)`
  display: flex;
  flex-wrap: nowrap;
  text-decoration: none;
  color: rgb(255, 255, 255) !important;
  align-items: center;
`;

export const LogoText1 = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: rgb(255, 255, 255);
  font-size: 18px;

  @media query and (min-width: 992px) {
    font-size: 20px;
  }
`;

export const LogoText2 = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: rgb(255, 255, 255);
  font-size: 18px;

  @media query and (min-width: 992px) {
    font-size: 20px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 70%;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Contact = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 0;
  position: relative;
  min-width: fit-content;
`;

export const ContactText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  display: block;
`;

export const ReachMeOut = styled.a`
  background-color: rgb(248, 248, 250);
  height: 100%;
  border-radius: 100rem;
  box-shadow:
    rgba(14, 14, 14, 0.03) 0px 1px 2.5px 0px,
    rgba(14, 14, 14, 0.05) 0px 4px 9px 1px;
  opacity: 1;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 44px;
  overflow: visible;
  padding: 0 20px;
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1a1a1a !important;
  font-weight: 600;
  gap: 8px;
`;
