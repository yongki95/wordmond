import styled from 'styled-components';

import { TopMain } from '../../components/BodyComponents/TopMain'
import { MiddleMain } from '../../components/BodyComponents/MiddleMain'

export const Home = () => {
  return (
    <Wrapper>
      <TopMain/>
      <MiddleMain/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`;
