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
    grid-template-columns: 20% 60% 20%;
    grid-template-areas: "contact about skills";
    grid-gap: 8px 8px;

    @media (max-width: 992px) {
      grid-template-columns: 40% 60%;
      grid-gap: 8px 8px;
      grid-template-areas:
        "contact about"
        "skills skills"
    }

    @media (max-width: 768px) {
      grid-template-columns: 100%;
      grid-template-areas:
        "contact"
        "about"
        "skills"
    }
  `;

  return (
    <GridWrapper>{props.children}</GridWrapper>
  )
}

export default Grid;