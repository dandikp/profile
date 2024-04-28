import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 2px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  cursor: pointer;
  overflow: hidden;
`;

export const Patty = styled.div`
  height: 2px;
  width: 24px;
  background: rgb(255, 255, 255);
  transform-origin: 50% 50% 0px;
  transform: none;
`;

export const TopPatty = styled(Patty)`
  position: absolute;
  left: calc(50.00000000000002% - 24px / 2);
  transition: all 0.2s ease;
  top: 12px;

  ${(props) => {
    if (props.active) {
      return css`
        transform: translateX(0px) translateY(3px) rotate(-45deg);
        transition: all 0.3s ease;
      `;
    }
  }}
`;

export const BottomPatty = styled(Patty)`
  position: absolute;
  bottom: 12px;
  left: calc(50.00000000000002% - 24px / 2);
  transition: all 0.2s ease;

  ${(props) => {
    if (props.active) {
      return css`
        transform: translateX(0px) translateY(-3px) rotate(45deg);
        transition: all 0.3s ease;
      `;
    }
  }}
`;
