import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FC, useCallback, useMemo } from "react";
import styled from "styled-components";

import { TopMain } from './BodyComponents/TopMain';
import { MiddleMain } from './BodyComponents/MiddleMain';

export const MainBody = () => {
  return (
    <Wrapper>
        <TopMain/>
        <MiddleMain/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

