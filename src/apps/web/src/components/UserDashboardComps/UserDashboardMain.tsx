import React from 'react';
import styled, { keyframes } from 'styled-components';

import { NavMenu } from './UserDashboardNav';
import { FlipCard } from '../BodyComponents/FlipCard';
import { MyCalendar } from './Calendar';

export const UserDashboardMain = () => {
  return(
    <Wrapper>
      
    </Wrapper>
  );
}

const backgroundColorChange = keyframes`
  from {
    background-color: white;
    height: 0;
  }
  to {
    background-color: black;
    height: calc(100vh - 50px);  

}
`
const Wrapper = styled.div`
  display: flex;
  & a {
    text-decoration: none;
    color: white;
  }
`;
