import React from 'react';
import styled from 'styled-components';

const Cell = props => {
  const CellWrapper = styled.section`
  height: 100%;
  min-width: 0;
  align-content: space-around;
  grid-area: ${props.area}
`;

return (<CellWrapper>{props.children}</CellWrapper>)

}

const { string } = React.PropTypes;

Cell.propTypes = {
  /**
   * The grid-area CSS property.
   */
  area: string.isRequired
}

export default Cell;