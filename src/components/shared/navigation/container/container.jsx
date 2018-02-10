import React from 'react';
import styled from 'styled-components';

/**
 * Container component for the navigation bar;
 */
const Container = props => {
  const ContainerWrapper = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 50px;
    vertical-align: 50px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0 2px 5px #888888;
    
    @media (max-width: 1200px) {
      max-width: 1170px;
    }

    @media (max-width: 992px) {
      max-width: 970px;
    }

    @media (max-width: 768px) {
      max-width: 750px;
    }
  `;

  return (
    <ContainerWrapper>{props.children}</ContainerWrapper>
  );
}

export default Container;