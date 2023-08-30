import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Layout } from './pages/Layout';
import { MainHeader } from './components/MainHeader';
import { MainBody } from './components/MainBody';

export default function App () {
  return (
    <Wrapper>
      <Layout>
        <MainHeader/>
        <MainBody/>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`;