import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import { Post } from "@sartios/blog-theme";

const PostContainer = styled.div`
  width: calc(33.33% - 2 * 40px / 3);
  display: inline-block;
  margin: 10px;
  background-color: #ecf0f1;

  a {
    text-decoration: none;
    color: rgba(38, 41, 58, 1);

    &:active {
      color: rgba(38, 41, 58, 0.6);
    }
  }

  @media (max-width: 992px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 780px) {
    margin-left: 0;
    flex-direction: column;
  }
`;

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        excerpt: postEdge.node.excerpt
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();

    return (
      <Container>
        {postList.map(post => (
          <PostContainer>
            <Link to={post.path}>
              <Post {...post} />
            </Link>
          </PostContainer>
        ))}
      </Container>
    );
  }
}

export default PostListing;
