import { FC, ReactNode } from 'react';
import styled from 'styled-components';

export const Layout: FC <{ children: ReactNode }> = ({ children }) => {
  return(
    <Wrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display:flex;
  height:100vh;
  flex-direction: column;
  margin: 0 20%;
`;
