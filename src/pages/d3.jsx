import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import BlogsScreen from "../screens/blogs/blogsScreen";
import SEO from "../components/shared/seo/seo";
import config from "../../data/SiteConfig";

class D3Posts extends React.Component {
  render() {
    const { data } = this.props;
    const { allMarkdownRemark } = data;

    if (allMarkdownRemark === undefined) {
      return null;
    }

    const postEdges = allMarkdownRemark.edges;

    const PageTitle = styled.h1`
      color: #ecf0f1;
      text-align: center;
    `;

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <PageTitle>All D3 Articles</PageTitle>
        <BlogsScreen postEdges={postEdges} />
      </div>
    );
  }
}

export default D3Posts;

/* eslint no-undef: "off"*/
export const d3PostsQuery = graphql`
  query D3PostsQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { eq: "d3" } } }
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
