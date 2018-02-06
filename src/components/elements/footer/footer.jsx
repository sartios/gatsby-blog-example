import React, { Component } from "react";
import Link from "gatsby-link";
import styled from 'styled-components';

import UserLinks from '../userLinks/userLinks';

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    
    if (!copyright) {
      return null;
    }

    const FooterContainer = styled.footer`
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      justify-content: center;
      align-content: center;
      padding: 10px 5px 5px;
      background-color: #3f4548;
      color: lightgray;
      height: 50px;

      @media (max-width: 768px) {
        height: 20px;
        padding: 0;
      }
    `;

    const NoticeContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      padding-bottom: 5px;

      @media (max-width: 768px) {
        justify-content: space-around;
        padding-bottom: 0;
      }
    `;

    const Copyright = styled.h4`
      text-align: center;
      margin: 0;
    `

    return (
      <FooterContainer>
        <NoticeContainer>
          <Copyright>{copyright}</Copyright>
          <UserLinks config={config} labeled />
          <Link to={url}>
            <button>Subscribe</button>
          </Link>
        </NoticeContainer>
      </FooterContainer>
    );
  }
}

export default Footer;
