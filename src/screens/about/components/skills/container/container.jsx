import React from 'react';
import styled from 'styled-components';

/**
 * Container component for skills.
 */
const Container = props => {
  const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 300px;
    background-color: #3F4548;
    color: #D3D3D3;
    position: fixed;
    top: 50px;
    right: 0;
    height: 100%;

    @media (max-width: 1200px) {
      max-width: 230px;
    }

    @media (max-width: 992px) {
      position: relative;
      top: 0;
      min-height: 600px;
      max-width: 100%;
    }
  `;

  return (
    <ContainerWrapper>{props.children}</ContainerWrapper>
  )
}

export default Container;