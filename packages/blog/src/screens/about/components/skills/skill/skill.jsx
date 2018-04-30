import React from 'react';
import styled from 'styled-components';

/**
 * Skill component.
 */
const Skill = props => {
  const SkillWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 5px;
  `;

  const IconWrapper = styled.span`
    color: #1ABC9C;
  `;

  const MiscIconWrapper = styled.span`
    color: #8E44Ad;
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