import { gql, useQuery } from '@apollo/client';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

import { CreatePractice } from './CreatePractice';
import { useAuth } from '../../auth';

enum Language {
  Eng = 'eng',
  Kor = 'kor',
};

type Word = {
  level: number;
  eng: string;
  kor: string;
};

export const Practice = () => {
  const [levelId, setLevelId] = useState<null | Word['level']>(null);
  const [language, setLanguage] = useState<null | Language>(null);

  useAuth(true);

  const levels = useMemo(() => {
    return [ 
      { id: 1 , label: 'A1' },
      { id: 2 , label: 'A2' },
      { id: 3 , label: 'B1' },
      { id: 4 , label: 'B2' },
      { id: 5 , label: 'C1' },
      { id: 6 , label: 'C2' },
    ];
  }, []);

  return (
    <Wrapper>
      <LevelWrapper>
        <div>
          <h2>Choose Level</h2>
          {levels.map(({ id, label }) => (
            <Button
              onClick={()=> { setLevelId(id) }}
              key={id}
            >
              {label}
            </Button>
          ))}
        </div>

        <div>
          <h2>Choose Type</h2>
          {Object.entries(Language)
            .map(([key, value]) => (
              <Button
                onClick={()=> setLanguage(value)}
                key={value}
              >
                {key}
              </Button> 
            ))}
        </div>
      </LevelWrapper>

      {levelId && language && (
        <CreatePractice level={levelId} type={language} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const LevelWrapper = styled.div`
`;

const Button = styled.button`
`;
