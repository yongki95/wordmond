import styled from "styled-components";

import { MenuHeader } from "./MenuHeader";
import { MenuMain } from "./MenuMain";
import { UserMenuMain } from "./UserMenuMain";

export const MenuBar = () => {
  return (
    <Wrapper>
      {/* admin */}
      <MenuHeader />
      {/* <MenuMain /> */}

      <UserMenuMain />

    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;
