import React from 'react';
import styled from 'styled-components';

/**
 * Layout container. 
 */
const Container = props => {
  const ContainerElement = styled.div`
    height: 100%;
  `

  return <ContainerElement>{props.children}</ContainerElement>
}

export default Container;

