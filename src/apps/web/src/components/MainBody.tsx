import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FC, useCallback, useMemo } from "react";
import styled from 'styled-components';
import { Route, Routes, Router } from 'react-router-dom';

import { Home } from '../pages/Main/Main';
import { About } from '../pages/About/About';
import { Word } from '../pages/Word/Word';

export const MainBody = () => {
  return (
    <Wrapper>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Word' element={<Word/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

