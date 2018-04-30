import React, { Component } from "react";
import styled from 'styled-components';

class About extends Component {
  render() {
    const Container = styled.div`
      background-color: #ECF0F1;
      height: auto;
      min-height: 600px;
      padding: 30px;
      max-width: 992px;
      width: 100%;
    `;

    const TextPlaceholder = styled.div`
      p {
        margin-top: 50px;
      }
    `

    return (
      <Container>
        <TextPlaceholder
          dangerouslySetInnerHTML={{ __html: this.props.content.html }}
        />
      </Container>
    );
  }
}

export default About;
