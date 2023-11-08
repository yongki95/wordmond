import { FC, useMemo, useState } from 'react';
import styled from 'styled-components';

import { CreateTest } from './CreateTest';
import { useAuth } from '../../auth';

export const Test: FC = () => {
  const [level, setLevel] = useState(0);
  const [type, setType] = useState<string>('');

  useAuth(true);

  const levels = useMemo(() => {
    return [ 
      { level: 'A1', numLevel: 1 },
      { level: 'A2', numLevel: 2 },
      { level: 'B1', numLevel: 3 },
      { level: 'B2', numLevel: 4 },
      { level: 'C1', numLevel: 5 },
      { level: 'C2', numLevel: 6 },
    ];
  }, []);

  const testTypes = useMemo(() => {
    return [
      { type: 'eng' },
      { type: 'kor' },
    ];
  }, []);

  return(
    <Wrapper>
      <LevelWrapper>
        <Section>
          <h2>Choose Level</h2>
          {
            levels.map((level, index) => (
              <Button 
                onClick={()=> {setLevel(level.numLevel)}} 
                key={index}
              >
                {level.level}
              </Button>
            ))
          }
          <h2>Choose Type</h2>
          {
            testTypes.map((type, index) => (
              <Button 
                onClick={()=> {setType(type.type)}} 
                key={index}
              >
                {type.type}
              </Button> 
            ))
          }
        </Section>
      </LevelWrapper>
      {
        level !== 0 && type !== "" && (
          <CreateTest level={level} type={type} />
        )
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
`;

const LevelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #9fb9e2;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;
