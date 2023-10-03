import React, { FC, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { NavMenu } from '../NavMenu';

export const UserDashboardHeader = () => {
  return (
    <Wrapper>
      <Logo>
        <Link to={'/'}>Wordmond</Link>
      </Logo>
        <NavMenu/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
`;

const wide = keyframes`
  from {
    margin: 0 20%;
    opcaity: 0.8
  }
  to {
    margin: 0 50px;
  }
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  display:flex;
  align-items: center;

  & a {
    text-decoration: none;
    color: inherit;
  }

  animation: ${wide} 1s ease-in-out forwards;
`;

