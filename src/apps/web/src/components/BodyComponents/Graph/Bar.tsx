import React, { FC } from 'react';
import styled from 'styled-components'

type BarProps = {
  level: string;
  value: number;
  bColor: string;
}

export const Bar: FC<BarProps> = ({level, value, bColor}) => {
  return <StyledBar level={level} value={value} bColor={bColor} />;
}

const StyledBar = styled.div<BarProps>`
  width: 80px;
  height: ${props => `${props.value}%`};
  position: relative;
  transition: height 0.5s;
  background-color: ${({ bColor }) => bColor};

  &::before {
    content: "${props => props.level}";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;