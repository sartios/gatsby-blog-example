import React from 'react';
import styled from 'styled-components';

const Container = props => {
  const ContainerElement = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `

  return (
    <ContainerElement>
      {props.children}
    </ContainerElement>
  )
}

export default Container;