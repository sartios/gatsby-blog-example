import React, { Component } from "react";
import Helmet from "react-helmet";

import AboutScreen from '../screens/about/aboutScreen';
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <AboutScreen />
      </div>
    );
  }
}

export default AboutPage;
