import React from 'react';
import styled from 'styled-components';

const Container = props => {
  const ContainerWrapper = styled.div`
    width: 100%;
    height: 900px;
    padding: 0 16px;
    margin-top: 50px;
  `;

  return <ContainerWrapper>{props.children}</ContainerWrapper>
}

export default Container;