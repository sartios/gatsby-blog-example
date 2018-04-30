import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import BlogsScreen from "../screens/blogs/blogsScreen";
import SEO from "../components/shared/seo/seo";
import config from "../../data/SiteConfig";

class ReactPosts extends React.Component {
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
        <PageTitle>All React Articles</PageTitle>
        <BlogsScreen postEdges={postEdges} />
      </div>
    );
  }
}

export default ReactPosts;

/* eslint no-undef: "off"*/
export const reactPostsQuery = graphql`
  query ReactPostsQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { eq: "react" } } }
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
