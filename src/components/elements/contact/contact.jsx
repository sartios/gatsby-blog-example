import React from 'react';
import styled from 'styled-components';

const Contact = props => {
  const Container = styled.div`
    display: inline-block;
    height: 100%;
    width: 200px;
    background-color: white;
    margin-top: 10px;
  `

  return (
    <Container>
      Contact
    </Container>
  );
}

export default Contact;