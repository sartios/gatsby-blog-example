import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import styled from 'styled-components';

class PostTags extends Component {
  render() {
    const { tags } = this.props;

    const TagsContainer = styled.div`
      display: flex;
    `

    const Tag = styled.div`
      border: 1px solid lightgray;
      padding: 5px;
      margin-right: 5px;
      border-radius: 5px;
    `
    
    return (
      <TagsContainer>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Tag>{tag}</Tag>
            </Link>
          ))}
      </TagsContainer>
    );
  }
}

export default PostTags;
