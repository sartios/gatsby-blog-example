import React from 'react';

import Container from './components/container/container';
import Grid from './components/grid/grid';
import Column from './components/column/column';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Contact from '../../components/elements/contact/contact';

const AboutScreen = props => (
  <Container>
    <Grid>
      <Column name="">
        <Contact />
      </Column>
      <Column name="">
        <About />
      </Column>
      <Column name="">
        <Skills />
      </Column>
    </Grid>
  </Container>
)

export default AboutScreen;