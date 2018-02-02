import React, { Component } from "react";
import styled from 'styled-components';

class About extends Component {
  render() {
    const Container = styled.div`
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      min-height: 300px;
    `;
    return (
      <Container>
        <h1>
          Edit About component or pages/about.jsx to include your information.
        </h1>
      </Container>
    );
  }
}

export default About;
