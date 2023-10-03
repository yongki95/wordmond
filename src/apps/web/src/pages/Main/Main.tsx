import styled from 'styled-components';

import { HeroSession } from './HeroSession';
import { MiddleMain } from '../../components/BodyComponents/MiddleMain';
import { BarChart } from '../../components/BodyComponents/Graph/Graph';
import { BottomMain } from '../../components/BodyComponents/BottomMain';
import { Footer } from '../../components/BodyComponents/Footer';

export const Home = () => {
  return (
    <Wrapper>
      <HeroSession/>
      <MiddleMain/>
      <BarChart/>
      <BottomMain/>
      <Footer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`;


