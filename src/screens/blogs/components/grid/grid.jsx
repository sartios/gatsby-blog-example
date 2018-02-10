import React from 'react';
import styled from 'styled-components';

/**
 * Grid component for main screen.
 */
const Grid = props => {
  const GridWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 300px auto;
    grid-template-areas: "contact blogs";
    grid-gap: "8px 8px";

    @media (max-width: 768px) {
      grid-template-columns: auto;
      grid-template-areas: "blogs";
    }
  `;

  return (
    <GridWrapper>
      {props.children}
    </GridWrapper>
  )
}

export default Grid;