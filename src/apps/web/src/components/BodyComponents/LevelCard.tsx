import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import styled from 'styled-components'

type LevelCardProps = {
  level: number;
  style?: React.CSSProperties;
};

export const LevelCard: FC<LevelCardProps> = ({ style, level }) => (
  <Wrapper style={style} >
    <h3>level: {level}</h3>
    <FontAwesomeIcon
      icon={faFaceSmile}
      size="6x"
      style={{ color: "black" }}
    />
  </Wrapper>
);
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  position: relative;
  border-radius: 10px;
  font-size: 34px;
  overflow: hidden;

  svg {
    position: absolute;
    left: 65%;
    top: 30%;
    opacity: 0.1;
  }
`;
