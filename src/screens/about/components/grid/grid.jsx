import React from 'react';
import styled from 'styled-components';

/**
 * Grid component for about screen.
 */
const Grid = props => {
  const GridWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 300px 750px 300px;
    grid-template-areas: contact about skills;
    justify-content: center;
    grid-gap: "8px";

    @media (max-width: 768px) {
      grid-template-columns: auto;
      grid-template-areas:
        "contact",
        "about",
        "skills"
    }
  `;

  return (
    <GridWrapper>{props.children}</GridWrapper>
  )
}

export default Grid;