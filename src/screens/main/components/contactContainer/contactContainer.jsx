import React from 'react';
import styled from 'styled-components';

/**
 * Container for the contact component on main screen.
 */
const ContactContainer = props => {
  const Container = styled.div`
    display: inline-block;
    position: fixed;
    height: 100%;
    max-height: 700px;
    width: 300px;
    background-color: white;
    margin-top: 10px;
    padding: 10px;
  `;

  return (
    <Container>
      {props.children}
    </Container>
  )  
}

export default ContactContainer;