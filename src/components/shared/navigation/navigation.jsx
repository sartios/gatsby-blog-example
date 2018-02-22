import React from 'react';

import Container from './container';
import Item from './item';
import Title from './title';

/**
 * Navigation menu component.
 */
const Navigation = (props) => (
  <Container>
    <Title />
    <div>
      <Item to="/" label="blogs" isActive={props.currentPath.indexOf('about') === -1} />
      <Item to="/about/" label="about"  isActive={props.currentPath.indexOf('about') !== -1} />
    </div>
  </Container>
  )

const { string } = React.PropTypes;

Navigation.propTypes = {
  /**
   * The current navigation path.
   */
  currentPath: string
}

Navigation.defaultProps = {
  currentPath: ''
}

export default Navigation;