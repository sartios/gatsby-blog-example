import React from "react";
import styled from "styled-components";

const PostMeta = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 4px 12px 0;
  }
`;

const Post = props => (
  <div className="theme-post">
    <PostMeta>
      <i className="fab fa-react" style={{ color: "#3498DB" }} />
      <span>{props.data.date}</span>
      &#9679;
      <span>{props.data.timeToRead} min</span>
    </PostMeta>
    <h2>{props.data.title}</h2>
    <p>{props.data.excerpt}</p>
  </div>
);

export default Post;
