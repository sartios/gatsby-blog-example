import React from 'react';
import styled from 'styled-components';

/**
 * Skill component.
 */
const Skill = props => {
  const SkillWrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const IconWrapper = styled.span`
    color: #90EE09;
  `;

  const MiscIconWrapper = styled.span`
    color: orange;
  `

  if( props.misc ) {
    return (
      <SkillWrapper>
        {props.label}
        <MiscIconWrapper>
          <i className="fas fa-star" />
        </MiscIconWrapper>
      </SkillWrapper>
    )
  }

  return (
    <SkillWrapper>
      {props.label}
      <IconWrapper>
        <i className="fas fa-check" />
      </IconWrapper>
    </SkillWrapper>
  )
}

export default Skill;