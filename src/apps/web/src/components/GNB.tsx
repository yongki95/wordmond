import { FC } from 'react';
import styled from 'styled-components';

import { NavMenu } from './NavMenu/NavMenu';

export const GNB: FC = () => {
  return (
    <Wrapper>
      <Logo>Wordmond</Logo>
      <NavMenu/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
  display:flex;
  align-items: center;
`;

