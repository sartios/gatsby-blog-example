import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';


import UserInfo from "../components/elements/userInfo/userInfo";
import PostTags from "../components/elements/postTags/postTags";
import SocialLinks from "../components/elements/socialLinks/socialLinks";
import SEO from "../components/shared/seo/seo";
import config from "../../data/SiteConfig";

import './post.css';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    const Article = styled.article`
      background-color: white;
      padding: 24px;
    `

    const MetaData = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `;

    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Article>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <MetaData>
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </MetaData>
          <UserInfo config={config} />
        </Article>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
