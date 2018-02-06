import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';

import config from "../../data/SiteConfig";
import Contact from '../components/elements/contact/contact';
import About from '../components/elements/about/about';

class AboutPage extends Component {
  render() {
    const Container = styled.div`
      width: 100%;
      height: auto;
    `;

    const Grid = styled.div`
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: 300px auto;
      grid-template-areas: contact about;
      grid-gap: "8px";

      @media (max-width: 768px) {
        grid-template-columns: auto;
        grid-template-areas:
          "contact",
          "about"
      }
    `;

    const ContactContainer = styled.div`
      grid-area: 'contact';
    `;

    const AboutContainer = styled.div`
      grid-area: 'about';
    `
    return (
      <Container>
        <Helmet title={config.siteTitle} />
        <Grid>
          <ContactContainer>
            <Contact />
          </ContactContainer>
          <AboutContainer>
            <About />
          </AboutContainer>
        </Grid>
      </Container>
    );
  }
}

export default AboutPage;
