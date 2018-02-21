import React from 'react';
import styled from 'styled-components';

/**
 * Main layout area.
 */
const Main = props => {
  const MainArea = styled.section`
    background-color: #8E44Ad;
    grid-area: main;
  `

  return (
    <MainArea>
      {props.children}
    </MainArea>
  );
}

export default Main;