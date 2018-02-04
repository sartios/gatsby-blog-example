import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Navigation = props => {
  const NavigationBar = styled.nav`
    background-color: white;
    box-shadow: 0 2px 5px #888888; 
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    position: fixed;
    top: 0;
    left  : 0;
    width: 100%;
  `;

  const NavigationLinks = styled.div`
    display: flex;
    justify-content: flex-end;
  `

  const NavigationItem = styled.div`
    color: #9A9B9D;
    display: inline-block;
    width: 100px;
    text-align: center;
    text-transform: capitalize;

    &:hover,
    &:focus {
      cursor: pointer;
      color: #84CEE0;
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `

  const NavigationTitle = styled.div`
    color: #3F4548;
    font-weight: bold;
    font-size: 18px; 
    padding-left: 10px;
    text-transform: uppercase;
  `

  return (
    <NavigationBar>
      <NavigationTitle>sartios</NavigationTitle>
      <NavigationLinks>
        <Link to="/">
          <NavigationItem>
          Blogs
          </NavigationItem>
        </Link>
        <Link to="/about">
          <NavigationItem>
          About
          </NavigationItem>
        </Link>
      </NavigationLinks>
    </NavigationBar>
  );
}

export default Navigation;