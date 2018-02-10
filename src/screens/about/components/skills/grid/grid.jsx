import React from 'react';
import styled from 'styled-components';

/**
 * Grid component for skills.
 */
const Grid = props => {
  const GridWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    padding: 30px;
  `

  return (
    <GridWrapper>{props.children}</GridWrapper>
  )
}

export default Grid;