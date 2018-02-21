import React from 'react';
import styled from 'styled-components';

/**
 * Column component for skills.
 */
const Column = props => {
  const ColumnWrapper = styled.div`
    min-height: 200px;
  `

  const ColumnTitle = styled.div`
    border-bottom: 1px solid #BDC3C7;
    text-transform: capitalize;
    padding-left: 2px;
  `

  return (
    <ColumnWrapper>
      <ColumnTitle>{props.title}</ColumnTitle>
      {props.children}
    </ColumnWrapper>
  )
}

export default Column;