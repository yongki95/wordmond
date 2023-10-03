import styled from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import { Home } from '../pages/Main/Main';
import { About } from '../pages/About/About';
import { Word } from '../pages/Word/Word';
import { Practice } from '../pages/Practice/Practice';
import { Test } from '../pages/Test/Test';
import { SignUp } from '../pages/SignUp/SignUp';
import { Login } from '../pages/Login/Login';

export const MainBody = () => {
  let location = useLocation();

  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames='slide' timeout={300}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/word' element={<Word/>} />
            <Route path='/practice' element={<Practice/>} />
            <Route path='/test' element={<Test/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .slide-enter {
    opacity: 0.01;
}

  .slide-enter.slide-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in;
  }

  .slide-exit {
      opacity: 1;
  }

  .slide-exit.slide-exit-active {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
  }
`;

