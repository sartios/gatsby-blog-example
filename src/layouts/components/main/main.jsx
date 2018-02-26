import React from "react";
import styled from "styled-components";

/**
 * Main layout area.
 */
const Main = props => {
  const MainArea = styled.section`
    background-color: #4183d7;
    grid-area: main;

    @media (max-width: 768px) {
      padding-bottom: 120px;
    }

    @media (max-width: 480px) {
      padding-bottom: 70px;
    }
  `;

  return <MainArea>{props.children}</MainArea>;
};

export default Main;
