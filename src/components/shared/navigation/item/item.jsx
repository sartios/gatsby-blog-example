import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

/**
 * Navigation item component.
 */
const Item = props => {
  const ItemWrapper = styled.div`
    color: #9A9B9D;
    display: inline-block;
    width: 100px;
    text-align: center;
    text-transform: capitalize;

    &:hover,
    &:focus {
      cursor: pointer;
      color: #84CEE0;
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (max-width: 480px) {
      width: 50px;
    }
  `

  return (
    <Link to={props.to}>
      <ItemWrapper>
        {props.label}
      </ItemWrapper>
    </Link>
  )
}

export default Item;