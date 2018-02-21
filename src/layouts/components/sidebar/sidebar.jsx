import React from 'react';
import styled from 'styled-components';

/**
 * Sidebar layout area.
 */
const Sidebar = props => {
  const SidebarArea = styled.section`
    width: 250px;
    background-color: #2C3E50;
    height: 100%;
    position: fixed;
    left: 0;
    grid-area: sidebar;
    padding-top: 40px;

    @media (max-width: 768px) {
      width: 100%;
      bottom: 0;
      height: 100px;
    }

    @media (max-width: 480px) {
      height: 50px; 
    }
  `;

  return (
    <SidebarArea>
      {props.children}
    </SidebarArea>
  )
}

export default Sidebar;