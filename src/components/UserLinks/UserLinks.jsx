import React, { Component } from "react";
import styled from 'styled-components';

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <button key={link.label} href={link.url}>
        {labeled ? link.label : ""}
      </button>
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
