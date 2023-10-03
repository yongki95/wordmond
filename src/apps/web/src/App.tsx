import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainBody } from './components/MainBody';
import { GNB } from './components/GNB';
import { Layout } from './pages/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <GNB/>
        <MainBody/>
      </Layout>
    </BrowserRouter>
  );
};
