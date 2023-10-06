import { FC, useMemo, useState } from 'react';
import styled from 'styled-components';

import { CreatePractice } from './CreatePractice';
import { useAuth } from '../../auth';

export const Practice: FC = () => {
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

  const languageTypes = useMemo(() => {
    return [
      {Eng: 'eng'},
      {Kor: 'kor'},
    ];
  },[]);

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
          <h2>Choose Language Type</h2>
          {languageTypes.map((langType, index) => {
            const [displayName, value] = Object.entries(langType)[0];

            return (
              <Button
                onClick={() => setLanguage(value)}
                key={index}
              >
                {displayName}
              </Button>
            );
          })}
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
