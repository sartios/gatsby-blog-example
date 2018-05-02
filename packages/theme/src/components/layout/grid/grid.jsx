import React from 'react';
import styled from 'styled-components';

/**
 * Grid layout area.
 */
const Grid = props => {
  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 100px auto;
    grid-template-areas:
      "header header"
      "sidebar main";
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      grid-template-columns: auto;
      grid-template-rows: 50px auto;
      grid-template-areas:
        "header"
        "main"; 
    }
  `

  return <GridContainer>{props.children}</GridContainer>
}

export default Grid;