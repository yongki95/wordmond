import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { MenuBar } from '../components/MenuBar';

export const Layout: FC <{ children: ReactNode }> = ({ children }) => {
    return (
        <Wrapper>
          <MenuBarWrapper>
            <MenuBar />
          </MenuBarWrapper>
          <BodyWrapper>
            {children}
          </BodyWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const MenuBarWrapper = styled.div`
  flex-basis: 260px;
  height: 100vh;
  background-color: #1f2729;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #c5d4ebaa;
`;