import { FC } from 'react';
import { styled } from 'styled-components';

import { LevelCard } from './LevelCard';

export const LevelSelection: FC = () => {
  const cardData = [
    { level: 1, style: { width: 350, height: 200, backgroundColor: '#97ecf1' } },
    { level: 2, style: { width: 350, height: 200, backgroundColor: '#ffcbcb' } },
    { level: 3, style: { width: 350, height: 200, backgroundColor: '#bdb2ff' } },
    { level: 4, style: { width: 350, height: 200, backgroundColor: '#fad1fa' } },
    { level: 5, style: { width: 350, height: 200, backgroundColor: '#fec868' } },
    { level: 6, style: { width: 350, height: 200, backgroundColor: '#f1f7b5' } },
  ];

  return (
    <Wrapper>
      {
        cardData.map((data, index) => (
          <LevelCard 
            key={index} 
            level={data.level} 
            style={data.style} 
          />
        ))
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10%;
`;
