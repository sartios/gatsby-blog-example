import React, { Component } from "react";
import styled from 'styled-components';

class About extends Component {
  render() {
    const Container = styled.div`
      background-color: white;
      height: auto;
      min-height: 600px;
      padding: 30px 150px 30px 30px;
      max-width: 992px;
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
