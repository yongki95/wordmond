import React, { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { WordFlashchard } from './FlashCard'; 

export const WordTop: React.FC<{level: number, index: number, goLeft: any, goRight: any}> = ({ level, index, goLeft, goRight}) => {
  return(
    <Wrapper>
      <WordFlashchard level={level} index={index}/>
      <button onClick={goLeft}><FontAwesomeIcon icon={faAngleDoubleLeft} size='sm' style={{color: 'black'}}/></button>
      <button onClick={goRight}><FontAwesomeIcon icon={faAngleDoubleRight} size='sm' style={{color: 'black'}}/></button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

const LevelWrapper = styled.div`
`;

const Button = styled.button`
`;