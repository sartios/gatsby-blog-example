import React from 'react';

import Container from './container';
import Item from './item';
import Title from './title';

/**
 * Navigation menu component.
 */
const Navigation = () => (
  <Container>
    <Title />
    <div>
      <Item to="/" label="blogs" />
      <Item to="/about" label="about" />
    </div>
  </Container>
  )

export default Navigation;