import React from 'react';
import avatar from '../../../public/avatar.png';
import {
  AvatarWrapper,
  ContactSection,
  Container,
  Content,
  Credit,
  CreditContent,
  MyContact,
  MySocials,
  ProfileSection,
  ReachMeOut,
  ReachMeOutText,
  Section,
  SectionParagraph,
  SectionTitle,
  Social,
  SocialLink,
  Socials,
  Wrapper,
} from './Footer.style';
import { EmailOutlined } from '@mui/icons-material';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <ProfileSection>
            <Section>
              <SectionTitle>DANDI PRATAMA</SectionTitle>
              <SectionParagraph color="grey">
                Web Developer, currently working at{' '}
                <a href="https://baleomol.com" target="_blank">
                  Baleomol.com
                </a>
              </SectionParagraph>
            </Section>
            <AvatarWrapper>
              <img src={avatar} alt="Dandi Avatar" />
            </AvatarWrapper>
          </ProfileSection>
          <ContactSection>
            <MyContact>
              <ReachMeOutText>
                See myself as a strong match for your team or project? Let’s
                connect.
              </ReachMeOutText>
              <ReachMeOut href="mailto:dandi.karunia@gmail.com">
                <EmailOutlined />
                Contact me
              </ReachMeOut>
            </MyContact>
            <MySocials>
              <SectionTitle color="grey">SOCIALS</SectionTitle>
              <Socials>
                <Social>
                  <SocialIcon
                    network="email"
                    style={{ width: '28px', height: '28px' }}
                    bgColor="transparent"
                  />
                  <SocialLink
                    href="mailto:dandi.karunia@gmail.com"
                    title="Email">
                    Email
                  </SocialLink>
                </Social>
                <Social>
                  <SocialIcon
                    network="instagram"
                    style={{ width: '28px', height: '28px' }}
                    bgColor="transparent"
                  />
                  <SocialLink
                    href="https://www.instagram.com/dandikp/"
                    target="_blank"
                    title="Instagram">
                    Instagram
                  </SocialLink>
                </Social>
                <Social>
                  <SocialIcon
                    network="github"
                    style={{ width: '28px', height: '28px' }}
                    bgColor="transparent"
                  />
                  <SocialLink
                    href="https://github.com/dandikp"
                    target="_blank"
                    title="Github">
                    Github
                  </SocialLink>
                </Social>
                <Social>
                  <SocialIcon
                    network="linkedin"
                    style={{ width: '28px', height: '28px' }}
                    bgColor="transparent"
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/dandikp/"
                    target="_blank"
                    title="Linkedin">
                    Linkedin
                  </SocialLink>
                </Social>
              </Socials>
            </MySocials>
          </ContactSection>
        </Content>
      </Container>
      <Credit>
        <CreditContent>
          <span>
            A SITE ABOUT <strong>DANDI PRATAMA</strong>
          </span>
          <span>&copy;2024</span>
        </CreditContent>
      </Credit>
    </Wrapper>
  );
};

export default Footer;
