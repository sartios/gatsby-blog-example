import React from 'react';
import styled from 'styled-components';

/**
 * Container component for the navigation bar.
 */
const Container = props => {
  const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      padding-right: 20px;
      height: 100%;
    }
  `;

  return (
    <ContainerWrapper>{props.children}</ContainerWrapper>
  );
}

export default Container;