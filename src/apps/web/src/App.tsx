import React, { FC, useState } from 'react';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import './App.css';
import { CreateBulkWord } from './components/CreateBulkWord';
import { DeleteWord } from './components/DeleteWord';
import { DeleteBulkWord } from './components/DeleteBulkWord';
import { SearchkWord } from './components/SearchWord';
import { UpdateWordKor } from './components/UpdateWord';

export default function App() {
  return (
    <div>
      <h2>Wordmond 🚀</h2>

      {/* <CreateBulkWord /> */}
      {/* <DeleteWord /> */}
      {/* <DeleteBulkWord /> */}
      <SearchkWord />
      {/* <UpdateWordKor /> */}
    </div>
  );
};
