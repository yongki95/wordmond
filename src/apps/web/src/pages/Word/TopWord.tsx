import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { WordFlashchard } from './WordFlashCard'; 

export const WordTop: React.FC<WordTopProps> = ({ 
  level, 
  index, 
  goLeft,
  goRight,
}) => {
  return(
    <Wrapper>
      <Button onClick={goLeft}>
        <FontAwesomeIcon 
          icon={faAngleDoubleLeft} 
          size='sm' 
        />
      </Button>
      <WordFlashchardWrapper>
        <WordFlashchard level={level} index={index}/>
      </WordFlashchardWrapper>
      <Button onClick={goRight}>
        <FontAwesomeIcon 
          icon={faAngleDoubleRight} 
          size='sm' 
        />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
`;

const WordFlashchardWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  color: #9fb9e2;
  cursor: pointer;

  &:hover {
    color: #949999
  }
`;