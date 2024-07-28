import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope, Github, Link } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap; /* Added to wrap content */
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 45vh; /* Adjusted height */
  margin: 1rem; /* Added margin for spacing */
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I 'm Sola. I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            Call me Thy Tang torr. I enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>

        {/* Additional sections */}
        <Main>
          <Title>
            <Github width={40} height={40} /> Graphic Designer
          </Title>
          <Description>
            I'm Rith. I enjoy creating Styles systems that support the frontend applications.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Photoshop, CSS, REST APIs</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VSCode, Android Studio, Adode XD</p>
          </Description>
        </Main>

        <Main>
          <Title>
            <Link width={40} height={40} /> Supporter
          </Title>
          <Description>
            I'm Nha kab jak. I manage team and integration and delivery of software projects with high quality.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Bully, Blame, Spenning money</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>AI, Germini, BlackBox, OpenCode</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
