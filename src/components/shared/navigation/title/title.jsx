import React from 'react';
import styled from 'styled-components';

/**
 * Navigation title component.
 */
const Title = () => {
  const TitleWrapper = styled.div`
    color: #95A5A6;
    font-weight: bold;
    font-size: 18px; 
    padding-left: 10px;
    text-transform: capitalize;
    display: none;

    @media (max-width: 768px) {
      display: inline;
    }
    `

  return (
    <TitleWrapper>sartios</TitleWrapper>
  )
}

export default Title;