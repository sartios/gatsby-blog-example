import React from 'react';
import styled from 'styled-components';

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");

/**
 * CSS Grid container component. 
 */
const Grid = (props) => {
  const GridContainer = styled.div`
  display: grid;
  grid-auto-flow: ${props.flow};
  grid-template-columns: ${props.columns};
  grid-gap: ${props.gap} ${props.gap};
  grid-template-areas: ${formatAreas(props.areas)};
`;

  return (<GridContainer>{props.children}</GridContainer>);
};

const { string, number, oneOfType, arrayOf} = React.PropTypes;

Grid.propTypes = {
  /**
   * The grid-template-columns CSS property.
   */
  columns: oneOfType([string, number]),
  /**
   * Gap between cells.
   */
  gap: string,
  /**
   * The grid-auto-flow CSS property.
   */
  flow: string,
  /**
   * The grid-template-areas CSS property.
   */
  areas: arrayOf(string),
  /**
   * The justify-content CSS property.
   */
  justifyContent: string,
  /**
   * The align-content CSS property.
   */
  alignContent: string
};

Grid.defaultProps = {
  columns: 12,
  gap: '8px',
  flow: 'row',
}

export default Grid;