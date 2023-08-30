import { faPenToSquare, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useCallback } from "react";
import { styled } from "styled-components";

import { Profile } from "../../components/Overview";
import { EditProfile } from "../../components/EditProfile";

export const General = () => {
  return (
    <Wrapper>
      <Profile/>
      <EditProfile/>
    </Wrapper>   
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

