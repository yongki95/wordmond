import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styled from 'styled-components';

export const LevelCard: FC<LevelCardAttributes> = ({ style, level }) => {
  return(
    <Wrapper style={style} >
      <h3>level: {level}</h3>
      <FontAwesomeIcon
        icon={faFaceSmile}
        size="6x"
        style={{color: "black"}}
      />
    </Wrapper>
  );
};

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
