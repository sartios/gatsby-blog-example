import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import { Post as PostMeta } from "@sartios/blog-theme";

/**
 * Component to display a post inside a list.
 */
const Post = props => {
  const Container = styled.div`
    border: 1px solid rgba(38, 41, 58, 0.1);
    width: calc(33.33% - 2 * 40px / 3);
    display: inline-block;
    margin: 10px;
    padding: 24px;
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

  return (
    <Container>
      <Link to={props.data.path}>
        <PostMeta data={props.data} />
      </Link>
    </Container>
  );
};

const { number, string, shape, array } = React.PropTypes;

Post.propTypes = {
  /**
   * The post's data.
   */
  data: shape({
    /**
     * The time to read the post.
     */
    timeToRead: number,
    /**
     * An excerpt of the post content.
     */
    excerpt: string,
    /**
     * The post title.
     */
    title: string,
    /**
     * An array with the post's tags.
     */
    tags: array,
    /**
     * The date of the post.
     */
    date: string
  })
};

export default Post;
