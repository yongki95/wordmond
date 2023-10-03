import React from 'react';
import styled from 'styled-components';

import { Layout } from '../Layout';
import { UserDashboardHeader } from '../../components/UserDashboardComps/UserDashboardHeader';
import { UserDashboardMain } from '../../components/UserDashboardComps/UserDashboardMain';

export const UserDashboard = () => {
  return (
    <Wrapper>
      <UserDashboardHeader/>
      <UserDashboardMain/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;