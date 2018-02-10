import React from 'react';
import styled from 'styled-components';

/**
 * Navigation title component.
 */
const Title = () => {
  const TitleWrapper = styled.div`
    color: #3F4548;
    font-weight: bold;
    font-size: 18px; 
    padding-left: 10px;
    text-transform: uppercase;
  `

  return (
    <TitleWrapper>sartios</TitleWrapper>
  )
}

export default Title;