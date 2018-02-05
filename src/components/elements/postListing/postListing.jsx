import React from "react";
import styled from 'styled-components';

import Post from './post/post'

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {

    const Container = styled.div`
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 780px) {
        margin-left: 0;
        flex-direction: column;
      }
    `

    const postList = this.getPostList();
    return (
      <Container>
        {/* Your post list here. */
        postList.map(post => (
          <Post data={post} />
        ))}
      </Container>
    );
  }
}

export default PostListing;
