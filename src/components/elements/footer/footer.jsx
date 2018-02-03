import React, { Component } from "react";
import Link from "gatsby-link";
import styled from 'styled-components';

import UserLinks from "../UserLinks/UserLinks";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    
    if (!copyright) {
      return null;
    }

    const FooterContainer = styled.footer`
      justify-content: center;
      align-content: center;
      padding: 10px 5px 5px;
    `;

    const NoticeContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      margin-top: 25px;

      @media (max-width: 768px) {
        justify-content: space-around;
      }
    `;

    const Copyright = styled.h4`
    text-align: center;
    margin: 0;
    `

    return (
      <FooterContainer>
        <UserLinks config={config} labeled />
        <NoticeContainer>
          <Copyright>{copyright}</Copyright>
          <Link to={url}>
            <button>Subscribe</button>
          </Link>
        </NoticeContainer>
      </FooterContainer>
    );
  }
}

export default Footer;
