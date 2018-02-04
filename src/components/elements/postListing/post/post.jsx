import React from 'react';
import styled from 'styled-components';
import Link from "gatsby-link";

/**
 * Component to display a post inside a list.
 */
const Post = props => {
  const Container = styled.div`
    border: 1px solid rgba(38,41,58,0.1);
    width: calc(33.33% - 2 * 40px / 3);
    display: inline-block;
    margin: 10px;
    padding: 24px;
    background-color: white;

    a {
      text-decoration: none;
      color: rgba(38,41,58,1);

      &:active {
        color: rgba(38,41,58,0.6);
      }
    }

    @media (max-width: 992px) {
      width: 100%;
    }
  `

  const PostMeta = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: rgba(38,41,58,0.6);

    span {
      margin-left: 24px;
    }
  `

  const PostIcon = styled.img`
    height: 24px;
  `
  

  return (
    <Container>
      <Link to={props.data.path}>
        <PostMeta>
          <PostIcon src="http://www.randseay.com/img/backgrounds/bg-react.jpg" />
          <span>{props.data.date}</span>
          <span>{props.data.timeToRead} min</span>
        </PostMeta>
        <h2>{props.data.title}</h2>
        <p>{props.data.excerpt}</p>
      </Link>
    </Container>
  )
}

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
}

export default Post;