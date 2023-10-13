import { FC, useMemo } from 'react';
import styled from 'styled-components';

import { Bar } from './Bar';

export const BarChart: FC = () => {
  const Bars = useMemo(() => {
    return [
      { level: 'A1', value: 15, bColor: '#ffd49d' },
      { level: 'A2', value: 25, bColor: '#ffb55a' },
      { level: 'B1', value: 40, bColor: '#8ec3f6' },
      { level: 'B2', value: 55, bColor: '#7eb0d5' },
      { level: 'C1', value: 80, bColor: '#8bd3c7' },
      { level: 'C2', value: 100, bColor: '#9cd4d9' },
    ];
  }, []);

  const proficiencyLevel = useMemo(() => {
    return [
      { tag: 'Beginner' },
      { tag: 'Intermediate' },
      { tag: 'Advanced' },
    ];
  }, []);

  return (
    <Wrapper>
      <p>Level Chart</p>
      <BarChartContainer>
        {
          Bars.map(barData => (
            <Bar key={barData.level} {...barData} />
          ))
        }
      </BarChartContainer>
      <Label>
        {
          proficiencyLevel.map(data => (
            <p key={data.tag}> {data.tag} </p>
          ))
        }
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    min-width: 460px;
  }
`;

const BarChartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 400px;
  margin-top: 50px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  font-size: 12px;
  font-weight: 500;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-around;
`;
