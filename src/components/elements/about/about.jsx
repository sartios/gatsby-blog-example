import React, { Component } from "react";
import styled from 'styled-components';

class About extends Component {
  render() {
    const Container = styled.div`
      display: flex;
      background-color: white;
      justify-content: center;
      align-content: center;
      align-items: flex-start;
      height: auto;
      min-height: 300px;
      margin-left: 25px;

      @media (max-width: 768px) {
        margin-top: 25px;
        margin-left: 0;
      }
    `;

    const SubContainer = styled.div`
      width: 100%;
      height: auto;
      padding: 10px;
    `;

    const Item = styled.div`
      border: 1px solid lightgray;
      display: inline-block;
      width: 200px;
      padding: 10px;
      margin-bottom: 24px;
    `
    
    return (
      <Container>
        <SubContainer>
          <h2>Working Experience</h2>
          <Item>
            <div>Front End Developer</div>
            <div>2017 - Present</div>
            <div>ordereze</div>
          </Item>
          <Item>
            <div>Full Stack Developer</div>
            <div>2013 - 2017</div>
            <div>European Dynamics</div>
          </Item>
          <Item>
            <div>QA Developer</div>
            <div>2011 - 2012</div>
            <div>Voyager</div>
          </Item>
        </SubContainer>
        <SubContainer>
          <h2>Education</h2>
          <Item>
            <div>BSc. Informatics & Telecommunications</div>
            <div>2006 - 2011</div>
            <div>TEI Serron</div>
          </Item>
        </SubContainer>
      </Container>
    );
  }
}

export default About;
