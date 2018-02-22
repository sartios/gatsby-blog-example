import React from 'react';
import styled from 'styled-components';

/**
 * Container component for skills.
 */
const Container = props => {
  const ContainerWrapper = styled.div`
    width: 500px;
    background-color: #2C3E50;
    color: #BDC3C7;
    height: 100%;
    min-height: 800px;
    padding: 80px 30px;

    @media (max-width: 992px) {
      max-width: 100%;
      width: 100%;
      margin-top: 18px;
    }
  `;

  return (
    <ContainerWrapper>{props.children}</ContainerWrapper>
  )
}

export default Container;