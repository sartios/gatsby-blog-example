import React from 'react';
import styled from 'styled-components';

/**
 * Column component for the main screen.
 */
const Column = props => {
  const ColumnWrapper = styled.div`
    height: 100%;
    grid-area: ${() => props.name}

    @media (max-width: 768px) {
      display: ${() => (props.hideOnMobile ? 'none': 'block')}
    }
  `

  return (
    <ColumnWrapper>
      {props.children}
    </ColumnWrapper>
  );
}

const { bool, string } = React.PropTypes;

Column.propTypes = {
  /**
   * The name of the grid column.
   */
  name: string.isRequired,
  /**
   * True to hide the column on mobile.
   */
  hideOnMobile: bool
}

Column.defaultProps = {
  hideOnMobile: false
}

export default Column;