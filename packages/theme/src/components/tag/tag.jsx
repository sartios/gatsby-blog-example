import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  border: 1px solid lightgray;
  padding: 5px;
  margin-right: 5px;
  border-radius: 5px;
`;

const Tag = props => <TagContainer>{props.value}</TagContainer>;

export default Tag;
