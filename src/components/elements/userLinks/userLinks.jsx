import React, { Component } from "react";
import styled from 'styled-components';

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;

    const Link = styled.a`
      color: lightgray;
      font-size: 20px;
      text-decoration: none;
      margin-left: 10px;
      font-weight: normal;
      transition: .1s color linear;

      &:hover {
        color: white;
      }
    `

    return userLinks.map(link => (
      <Link href={link.url} target="_blank">
        <i className={link.iconClassName} />
      </Link>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }

    const Container = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      max-width: 100%;
    `;

    return <Container>{this.getLinkElements()}</Container>;
  }
}

export default UserLinks;
