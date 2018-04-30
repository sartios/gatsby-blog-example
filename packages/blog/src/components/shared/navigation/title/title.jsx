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
    
    a,
    a:hover,
    a:link,
    a:active,
    a:focus {
      text-decoration: none;
      color: inherit;
    }

    @media (max-width: 768px) {
      display: inline;
    }
    `

  return (
    <TitleWrapper><a href="/">sartios</a></TitleWrapper>
  )
}

export default Title;