import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { MenuBar } from '../components/MenuBar';

export const LayoutTwo: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <Wrapper>
      <MenuBarWrapper>
        <MenuBar />
      </MenuBarWrapper>
      <BodyWrapper>
        {children}
      </BodyWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MenuBarWrapper = styled.div`
  flex-basis: 150px;
`;

const BodyWrapper = styled.div`
  flex: 1;
`;