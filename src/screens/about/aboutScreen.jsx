import React from 'react';

import Container from '../../components/shared/container';
import Grid from './components/grid/grid';
import Column from './components/column/column';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Contact from '../../components/elements/contact/contact';

const AboutScreen = () => (
  <Container>
    <Grid>
      <Column name="contact">
        <Contact />
      </Column>
      <Column name="about">
        <About />
      </Column>
      <Column name="skills">
        <Skills />
      </Column>
    </Grid>
  </Container>
)

export default AboutScreen;