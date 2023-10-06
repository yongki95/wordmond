import { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import { About } from '../pages/About/About';
import { TestHistory } from '../pages/History/TestHistory';
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Main/Main';
import { Practice } from '../pages/Practice/Practice';
import { SignUp } from '../pages/SignUp/SignUp';
import { Test } from '../pages/Test/Test';
import { Word } from '../pages/Word/Word';

export const MainBody: FC = () => {
  let location = useLocation();

  const routes = [
    { path: '/', component: <Home /> },
    { path: '/word', component: <Word /> },
    { path: '/practice', component: <Practice /> },
    { path: '/test', component: <Test /> },
    { path: '/about', component: <About /> },
    { path: '/sign-up', component: <SignUp /> },
    { path: '/login', component: <Login /> },
    { path: '/History', component: <TestHistory /> },
  ];

  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition 
          key={location.key} 
          classNames='slide' 
          timeout={300}
        >
          <Routes>
            {routes.map((route, index) => (
              <Route 
                key={index} 
                path={route.path} 
                element={route.component} 
              />
            ))}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
};

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

