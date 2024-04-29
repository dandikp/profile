import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const Section = styled.section`
  min-height: calc(100dvh - 80px);
  display: flex;
  flex-flow: column nowrap;
`;

export const Hero = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: -120px;
`;

export const HeroItem = styled.div`
  width: max-content;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;

export const TitleHolder = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-size: 52px;
  font-weight: 600;
  line-height: 42px;
  color: rgb(255, 255, 255);
  margin: 0;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  line-height: 0.95;
`;

export const SubtitleHolder = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Subtitle = styled.span`
  gap: 16px;
`;
