import React from 'react';
import styled from 'styled-components';

const Container = props => {
  const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    height: 900px;
    padding: 0 16px;
    margin-top: 50px;

    @media (max-width: 768px) {
      padding: 0;
    }
  `;

  return <ContainerWrapper>{props.children}</ContainerWrapper>
}

export default Container;