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
  width: ${(props) => (props.width === 'max' ? 'max-content' : '100%')};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;

export const TitleHolder = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-size: 52px;
  font-weight: 700;
  line-height: 42px;
  color: rgb(255, 255, 255);
  margin: 0;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  line-height: 0.875;
`;

export const SubtitleHolder = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 8px;
`;

export const Subtitle = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  width: 100%;
  word-break: break-word;
`;

export const SectionTitleHolder = styled.div`
  position: relative;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;

export const SectionTitle = styled.span`
  font-size: 52px;
  font-weight: 700;
  line-height: 42px;
  color: rgb(255, 255, 255);
  margin: 0;
  align-items: center;
  text-transform: uppercase;
  text-align: left;
`;

export const SectionContent = styled.div``;
