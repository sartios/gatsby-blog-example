import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';

import PostListing from "../components/elements/postListing/postListing";
import Contact from '../components/elements/contact/contact';
import SEO from "../components/shared/seo/seo";
import Footer from "../components/elements/footer/footer";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const {data} = this.props;
    const {allMarkdownRemark} = data;

    if( allMarkdownRemark === undefined ) { return null; }
    const postEdges = allMarkdownRemark.edges;

    const Container = styled.div`
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: 300px auto;
      grid-template-areas: "contact blogs";
      grid-gap: "8px";

      @media (max-width: 768px) {
        grid-template-columns: auto;
        grid-template-areas: "blogs";
      }
    `

    const Column = styled.div`
      height: 100%;
      grid-area: ${props => props.name};

      @media (max-width: 768px) {
        display: ${props => (props.hideOnMobile ? 'none': 'block')}
      }
    `

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Container>
          <Column name="contact" hideOnMobile>
            <Contact />
          </Column>
          <Column name="blogs">
            <PostListing postEdges={postEdges} />
          </Column>
        </Container>
        <Footer config={config} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
