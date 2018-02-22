import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';

import AboutScreen from '../screens/about/aboutScreen';
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {

    const Container = styled.div`
      margin: 30px;

      @media (max-width: 768px) {
        margin: 0;
      }
    `

    return (
      <Container>
        <Helmet title={config.siteTitle} />
        <AboutScreen post={this.props.data.markdownRemark} />
      </Container>
    );
  }
}

export default AboutPage;

/* eslint no-undef: "off"*/
export const AboutQuery = graphql`
  query AboutQuery {
    markdownRemark(fields: { slug: { eq: "/about-me"}}) {
      html
      }
  }
`;