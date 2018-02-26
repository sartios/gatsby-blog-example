import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  const Grid = styled.div`
    display: grid;
    height: 100%;
    background-color: white;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "row-1",
      "row-2",
      "row-3",
  `
  const IntroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-item: 'row-1';
    font-size: 18px;
    color: #3A4250;
  `

  const ContactImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `

  const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-item: 'row-2';
  `

  const ContactButton = styled.button`
    padding: 12px 24px;
    background-color: #1f88be;
    color: white;
    text-shadow: none;
    outline: 0;
    min-height: 1em;
    cursor: pointer;
    border: none;
    font-size: 1em;
    vertical-align: baseline;
    transition: 0.1s background-color linear;

    &:hover {
      background-color: #147baf;
    }

    &:active {
      background-color: #186992;
    }
  `;

  const Icon = styled.i`
    color: ${({color}) => color || '#9a9b9d' };
    margin: 0 .42857143em 0 -.21428571em;
  `
  
  const GithubContact = styled.div`
    margin-top: 10px;
    font-size: 18px;
  `

  const GithubLink = styled.a`
    color: #84cee0;
    text-decoration: none;

    &:hover {
      color: #4183c4;
      text-decoration: none;
    }
  `

  const InfoSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    grid-item: 'row-3';
  `

  const InfoMeta = styled.div`
    color: #9a9b9d;
    font-size: 14px;
    cursor: default;
    margin-top: 6px;
  `

  return (
    <Grid>
      <IntroSection>
        <ContactImage src="https://semantic-ui.com/images/wireframe/image.png" />
        <span>Sartios</span>
        <span>Software Developer</span>
      </IntroSection>
      <ContactSection>
        <ContactButton><Icon color="white" className="fas fa-comment" />Contact Me</ContactButton>
        <GithubContact>
          <Icon className="fab fa-github" />
          <GithubLink href="https://www.github.com/sartios" target="_blank">github.com/sartios</GithubLink>
        </GithubContact>
      </ContactSection>
      <InfoSection>
        <InfoMeta><Icon className="far fa-envelope" />savramis.sartios@gmail.com</InfoMeta>
        <InfoMeta><Icon className="fab fa-linkedin-in" />linkedin.com/sartios</InfoMeta>
        <InfoMeta><Icon className="far fa-building" />web developer @ordereze</InfoMeta>
        <InfoMeta><Icon className="far fa-compass" />thessaloniki, greece</InfoMeta>
      </InfoSection>
    </Grid>
  );
}

export default Contact;