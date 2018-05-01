import React from "react";
import styled from "styled-components";

const Cover = styled.img`
  width: 100%;
  vertical-align: middle;
`;

const Description = styled.div`
  padding: 14px;
`;

const Post = props => (
  <div className="post-item">
    <div>
      <Cover src={props.cover} />
    </div>
    <Description>
      <h3>{props.title}</h3>
      <p>{props.excerpt}</p>
    </Description>
  </div>
);

export default Post;
