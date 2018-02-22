import React from 'react';

import Container from './container';
import Column from './column';
import Skill from './skill';

/**
 * Skills component.
 */
const Skills = () => (
  <Container>
    <Column title="front end">
      <Skill label="HTML, CSS, JS" />
      <Skill label="React" />
      <Skill label="Redux" />
      <Skill label="GraphQL" />
    </Column>
    <Column title="back end">
      <Skill label="JavaScript" />
      <Skill label="Java" />
      <Skill label="C#" />
      <Skill label="Rest" />
      <Skill label="Serverless" />
    </Column>
    <Column title="misc">
      <Skill label="Travelling" misc />
      <Skill label="Fitness" misc />
      <Skill label="OSS Contributing" misc />
    </Column>
  </Container>
  )

export default Skills;