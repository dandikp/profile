import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  min-height: 400px;
  background-color: rgba(0, 0, 0);
  display: flex;
  flex-flow: column nowrap;
`;

export const Container = styled.div`
  padding: 48px 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
  }
`;

export const Credit = styled.div`
  background-color: rgb(26, 26, 26);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const ContentBase = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
`;

export const Content = styled(ContentBase)`
  flex-wrap: nowrap;
  flex-direction: column-reverse;
  gap: 48px;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const ProfileSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 48px;

  @media screen and (min-width: 576px) {
    max-width: 339px;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 922px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    max-width: 762px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    width: 35%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 16px;

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const SectionTitle = styled.span`
  text-transform: capitalize;
  color: ${(props) =>
    props.color === 'grey' ? 'rgb(153, 153, 153)' : 'rgb(255, 255, 255)'};
  font-weight: 600;
  font-size: 1rem;
`;

export const SectionParagraph = styled.span`
  color: ${(props) =>
    props.color === 'grey' ? 'rgb(153, 153, 153)' : 'rgb(255, 255, 255)'};
  font-weight: 600;
  font-size: 1rem;
  a {
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
`;

export const AvatarWrapper = styled.div`
  width: 85%;
  display: flex;

  @media screen and (min-width: 922px) {
    max-width: 292px;
  }

  img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 48px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 922px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    width: 60%;
    gap: 48px;
  }
`;

export const MyContact = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 48px;

  @media screen and (min-width: 576px) {
    gap: 24px;
  }

  @media screen and (min-width: 922px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const MySocials = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 48px;

  @media screen and (min-width: 576px) {
    gap: 24px;
  }
`;

export const ReachMeOutText = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: rgba(255, 255, 255);

  @media screen and (min-width: 922px) {
    max-width: 415px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    max-width: 642px;
  }
`;

export const Socials = styled.div`
  display: grid;
  width: 220px;
  gap: 8px;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(auto-fill, 102px);
  justify-content: start;
  overflow: visible;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 6px;
`;

export const SocialLink = styled.a`
  color: #ffffff !important;
  font-weight: 500;
  text-decoration: none;
  transition: 0.1s linear text-decoration;

  &:hover {
    text-decoration: underline;
  }
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

export const CreditContent = styled(ContentBase)`
  flex-wrap: nowrap;
  justify-content: space-between;
  color: rgba(153, 153, 153);
  font-size: 12px;

  @media screen and (min-width: 922px) {
    max-width: 762px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  flex-wrap: nowrap;
  text-decoration: none;
  color: rgb(255, 255, 255) !important;
`;

export const LogoText1 = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: rgb(255, 255, 255);
  font-size: 18px;
`;

export const LogoText2 = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: rgb(255, 255, 255);
  font-size: 18px;
`;
