import React from 'react';
import styled from 'styled-components';

/**
 * Header layout area.
 */
const Header = props => {
  const HeaderArea = styled.header`
    height: 100px;
    width: 100%;
    background-color: #2C3E50;
    position: fixed;
    left: 0;
    top: 0;
    grid-area: header;
    padding-left: 250px;
    padding-top: 40px;

    @media (max-width: 480px) {
      position: relative;
      height: 100%;
    }
  `

  return (
    <HeaderArea>
      {props.children}
    </HeaderArea>)
}

export default Header;