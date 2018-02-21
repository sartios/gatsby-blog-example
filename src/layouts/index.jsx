import React from "react";
import Helmet from "react-helmet";

import Container from './components/container/container';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Grid from './components/grid/grid';
import Main from './components/main/main';
import Navigation from '../components/shared/navigation';

import config from "../../data/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  
  render() {
    const { children } = this.props;
    
    return (
      <Container>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Grid>
          <Header />
          <Sidebar>
            <Navigation currentPath={this.props.location.pathname} />
          </Sidebar>
          <Main>
            {children()}
          </Main>
        </Grid>
      </Container>
    );
  }
}
