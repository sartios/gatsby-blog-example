import React from 'react';

import Container from './components/container';
import About from './components/about/about';
import Skills from './components/skills/skills';

const AboutScreen = (props) => (
  <Container>
    <About content={props.post} />
    <Skills />
  </Container>
)

export default AboutScreen;