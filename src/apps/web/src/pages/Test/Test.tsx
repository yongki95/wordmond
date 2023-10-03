import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

import { CreateTest } from './CreateTest';
import { gql, useMutation } from '@apollo/client';


export const Test = () => {
  const [level, setLevel] = useState(0);
  const [type, setType] = useState('');

  const levels = useMemo(() => {
    return [ 
      {level: 'A1', numLevel: 1},
      {level: 'A2', numLevel: 2},
      {level: 'B1', numLevel: 3},
      {level: 'B2', numLevel: 4},
      {level: 'C1', numLevel: 5},
      {level: 'C2', numLevel: 6},
    ];
  }, []);

  const testTypes = useMemo(() => {
    return [
      {type: 'eng'},
      {type: 'kor'},
    ]
  }, []);

  return(
    <Wrapper>
      <LevelWrapper>
        <div>
          <h2>Choose Level</h2>
          {levels.map((level, index) => (
            <Button onClick={()=> {setLevel(level.numLevel)}} key={index}>{level.level}</Button>
          ))}
        </div>
        <div>
          <h2>Choose Type</h2>
          {testTypes.map((type, index) => (
            <Button onClick={()=> {setType(type.type)}} key={index}>{type.type}</Button> 
          ))}
        </div>
      </LevelWrapper>
      {level !== 0 && type !== "" && <CreateTest level={level} type={type} />}

    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

const LevelWrapper = styled.div`
`;

const Button = styled.button`
`;