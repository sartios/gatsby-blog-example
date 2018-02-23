import React from 'react';
import styled from 'styled-components';

const Avatar = () => {
  const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      display: none;
    }
  `

  const AvatarImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `

  return <AvatarContainer><AvatarImage src="https://semantic-ui.com/images/wireframe/image.png" /></AvatarContainer>
}

export default Avatar;