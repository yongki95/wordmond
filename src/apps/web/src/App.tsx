import React, { FC } from 'react';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import './App.css';

import { DisplayWords } from './components/DisplayWords';
export default function App() {
  return (
    <div>
      <h2>Wordmond 🚀</h2>
      <br/>
        <div id='level_container'>
          <DisplayWords page={1} limit={10} level={1}/>
          <DisplayWords page={1} limit={10} level={2}/>
          <DisplayWords page={1} limit={10} level={3}/>
          <DisplayWords page={1} limit={10} level={4}/>
          <DisplayWords page={1} limit={10} level={5}/>
        </div>
    </div>
  );
};
