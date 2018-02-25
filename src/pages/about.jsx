import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';

import AboutScreen from '../screens/about/aboutScreen';
import SEO from "../components/shared/seo/seo";

class AboutPage extends Component {
  render() {

    const Container = styled.div`
      margin: 30px;

      @media (max-width: 768px) {
        margin: 0;
      }
    `

    const postNode = this.props.data.markdownRemark;
    const postPath = postNode.fields.slug;

    return (
      <Container>
        <Helmet title="Sartios Fullstack Software Developer" />
        <SEO postNode={postNode} postPath={postPath} postSEO />
        <AboutScreen post={this.props.data.markdownRemark} />
      </Container>
    );
  }
}

export default AboutPage;

/* eslint no-undef: "off"*/
export const AboutQuery = graphql`
    query AboutQuery {
      markdownRemark(fields: { slug: { eq: "/about-me"}}) {
        html,
        fields{
          slug
        }   
        frontmatter {
          description
          title
        }
      }
    }
`;