import React, { Component } from "react";
import Helmet from "react-helmet";

import AboutScreen from '../screens/about/aboutScreen';
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <AboutScreen post={this.props.data.markdownRemark} />
      </div>
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