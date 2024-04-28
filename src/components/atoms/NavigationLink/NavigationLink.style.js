import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  @media screen and (min-width: 922px) {
    height: 24px;
  }
`;

export const Decoration = styled.div`
  width: 20px;
  height: 2px;
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(255, 255, 255);
`;

export const InteractiveDecoration = styled.div`
  width: 0;
  height: 2px;
  position: absolute;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s ease;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  background-color: rgb(255, 255, 255);

  ${(props) => {
    if (props.active) {
      return css`
        background-color: rgb(255, 255, 255);
        width: 20px;
        transition: all 0.3s ease;
        opacity: 1;
      `;
    }
    return '';
  }}
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255) !important;
  font-weight: 600;
  font-size: 44px;
  line-height: 1;

  @media screen and (min-width: 922px) {
    font-size: 16px;
    line-height: 1.5;
    text-transform: uppercase;
  }
`;
