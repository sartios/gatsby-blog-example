import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Container from '../components/shared/container/container';
import GridPage from '../components/elements/gridPage/gridPage';

class AboutPage extends Component {
  render() {
    return (
      <Container>
        <GridPage />
      </Container>
    );
  }
}

export default AboutPage;
