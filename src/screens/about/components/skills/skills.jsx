import React from 'react';

import Container from './container';
import Grid from './grid';
import Column from './column';
import Skill from './skill';

/**
 * Skills component.
 */
const Skills = () => (
  <Container>
    <Grid>
      FRONT END
      <Column>
        <Skill label="HTML, CSS, JS" />
        <Skill label="React" />
        <Skill label="Redux" />
        <Skill label="GraphQL" />
      </Column>
      BACK END
      <Column>
        <Skill label="JavaScript" />
        <Skill label="Java" />
        <Skill label="C#" />
        <Skill label="Rest" />
        <Skill label="Serverless" />
      </Column>
      MISC
      <Column>
        <Skill label="Travelling" misc />
        <Skill label="Fitness" misc />
        <Skill label="OSS Contributing" misc />
      </Column>
    </Grid>
  </Container>
  )

export default Skills;