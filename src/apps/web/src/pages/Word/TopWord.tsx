import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { WordFlashchard } from './FlashCard'; 

export const WordTop: React.FC<WordTopProps> = ({ 
  level, 
  index, 
  goLeft,
  goRight
}) => {
  return(
    <Wrapper>
      <WordFlashchard level={level} index={index}/>
      <button onClick={goLeft}>
        <FontAwesomeIcon 
          icon={faAngleDoubleLeft} 
          size='sm' 
          style={{color: 'black'}}
        />
      </button>
      <button onClick={goRight}>
        <FontAwesomeIcon 
          icon={faAngleDoubleRight} 
          size='sm' 
          style={{color: 'black'}}
        />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const LevelWrapper = styled.div`
`;

const Button = styled.button`
`;