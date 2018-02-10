import React from 'react';
import styled from 'styled-components';

/**
 * Column component for skills.
 */
const Column = props => {
  const ColumnWrapper = styled.div`
    min-height: 30%;
    border-top: 1px solid lightgray;
    padding-top: 10px;
    padding-left: 10px;
  `

  return (
    <ColumnWrapper>{props.children}</ColumnWrapper>
  )
}

export default Column;