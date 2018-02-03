import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/elements/about/about";
import config from "../../data/SiteConfig";
import GridPage from '../components/elements/gridPage/gridPage';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <GridPage />
      </div>
    );
  }
}

export default AboutPage;
