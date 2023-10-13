import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { NavMenu } from './NavMenu/NavMenu';

export const GNB: FC = () => {
  return (
    <Wrapper>
      <Link to ='./'>
        <Logo>Wordmond</Logo>
      </Link>
      <NavMenu/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
  display:flex;
  align-items: center;
  text-decoration: none;
`;
