import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import styled from "styled-components";

import { Tag } from "@sartios/blog-theme";

class PostTags extends Component {
  render() {
    const { tags } = this.props;

    const TagsContainer = styled.div`
      display: flex;
    `;

    return (
      <TagsContainer>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Tag value={tag} />
            </Link>
          ))}
      </TagsContainer>
    );
  }
}

export default PostTags;
