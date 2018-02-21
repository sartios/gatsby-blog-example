import React from 'react';

import Container from '../../components/shared/container';
import Grid from './components/grid/grid';
import Column from './components/column/column';
import About from './components/about/about';
import Skills from './components/skills/skills';

const AboutScreen = (props) => (
  <Container>
    <Grid>
      <Column name="about">
        <About content={props.post} />
      </Column>
      <Column name="skills">
        <Skills />
      </Column>
    </Grid>
  </Container>
)

export default AboutScreen;