import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  min-height: 280px;
  gap: 32px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 32px 0 0;
  gap: 16px;
  align-items: center;
`;

export const NavItem = styled.div`
  width: max-content;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;

export const NavLinkHolder = styled.div`
  position: relative;
`;

export const ContactMe = styled.div`
  width: 100%;
  border-top: 1px solid rgb(255, 255, 255);
  padding: 32px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 16px;
`;

export const ContactMeText = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
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
