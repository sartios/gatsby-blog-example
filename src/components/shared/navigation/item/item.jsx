import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

/**
 * Navigation item component.
 */
const Item = props => {
  const color = props.isActive ? '#ECF0F1' : '#95A5A6';
  const bgColor = props.isActive ? '#34495E' : 'none';
  
  const ItemWrapper = styled.div`
    color: ${color};
    text-align: center;
    text-transform: capitalize;

    &:hover,
    &:focus {
      cursor: pointer;
      color: #ECF0F1;
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (max-width: 768px) {
      display: inline-block;
      padding-left: 24px;
      padding-right: 24px;
      background-color: ${bgColor};
     
      &:hover,
      &:focus {
        background-color: #34495E;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
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