import { FC } from 'react';
import styled from 'styled-components';

import { HeroSession } from './HeroSession';
import { BottomMain } from '../../components/BodyComponents/BottomMain';
import { Footer } from '../../components/BodyComponents/Footer';
import { BarChart } from '../../components/BodyComponents/Graph/BarChart';
import { MiddleMain } from '../../components/BodyComponents/MiddleMain';

export const Home: FC = () => {
  return (
    <Wrapper>
      <HeroSession/>
      <MiddleMain/>
      <BarChart/>
      <BottomMain/>
      <Footer/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;
