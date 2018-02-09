import React from 'react';
import styled from 'styled-components';

/**
 * Container component for the about screen.
 */
const Container = props => {
  const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
  `;

  return (
    <ContainerWrapper>
      {props.children}
    </ContainerWrapper>
  )
}

export default Container;