import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Layout } from './pages/Layout';
import { MainHeader } from './components/MainHeader';
import { MainBody } from './components/MainBody';


export default function App () {
  return (
    <BrowserRouter>
      <Wrapper>
        <Layout>
          <MainHeader/>
          <MainBody/>
        </Layout>
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`

`;