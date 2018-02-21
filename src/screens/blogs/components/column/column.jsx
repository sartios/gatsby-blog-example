import React from 'react';
import styled from 'styled-components';

/**
 * Column component for the main screen.
 */
const Column = props => {
  const ColumnWrapper = styled.div`
    height: 100%;
    grid-area: ${() => props.name}
  `;

  return (
    <ColumnWrapper>
      {props.children}
    </ColumnWrapper>
  );
}

const { string } = React.PropTypes;

Column.propTypes = {
  /**
   * The name of the grid column.
   */
  name: string.isRequired
}

export default Column;