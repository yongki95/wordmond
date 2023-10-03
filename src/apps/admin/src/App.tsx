import React, { FC, useState } from 'react';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import './App.css';
import { CreateBulkWord } from './components/CreateBulkWord';
import { DeleteWord } from './components/DeleteWord';
import { DeleteBulkWord } from './components/DeleteBulkWord';
import { SearchkWord } from './components/SearchWord';
import { UpdateWordKor } from './components/UpdateWord';
import { Layout } from './pages/newLayout';
import { List } from './pages/Word/List';
import { Header } from './components/Header';
import { MainDashboard } from './pages/Dashboard/Main';
import { General } from './pages/User/General';

import 'normalize.css';

export default function App() {
  return (
    <div>

      {/* <Layout> */}
        {/* <Header headerName='Profile'/> */}
        {/* <List /> */}
        {/* <MainDashboard /> */}
        {/* <General /> */}
      {/* </Layout> */}



      {/* {false && <>
        <h2>Wordmond 🚀</h2> */}
        <CreateBulkWord />
        {/* <DeleteWord /> */}
        {/* <DeleteBulkWord /> */}
        {/* <SearchkWord /> */}
        {/* <UpdateWordKor /> */}
      {/* </>} */}
    </div>
  );
};
