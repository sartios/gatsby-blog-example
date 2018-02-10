import React from 'react';
import styled from 'styled-components';

/**
 * Container component based on bootstrap break points.
 */
const Container = props => {
  const ContainerWrapper = styled.div`
    width: 100%;
    padding: 0 16px;
    margin-top: 50px;
    
    @media (max-width: 1200px) {
      max-width: 1170px;
    }

    @media (max-width: 992px) {
      max-width: 970px;
    }

    @media (max-width: 768px) {
      max-width: 750px;
    }

    @media (max-width: 480px) {
      margin-top: 60px;
      padding: 0;
    }
  `;

  return (
    <ContainerWrapper>
      {props.children}
    </ContainerWrapper>
  )
}

export default Container;