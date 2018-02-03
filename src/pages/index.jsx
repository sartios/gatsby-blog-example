import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/elements/postListing/postListing";
import SEO from "../components/shared/seo/seo";
import Footer from "../components/elements/footer/footer";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const {data} = this.props;
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    const {allMarkdownRemark} = data;

    if( allMarkdownRemark === undefined ) { return null; }
    const postEdges = allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <PostListing postEdges={postEdges} />
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
