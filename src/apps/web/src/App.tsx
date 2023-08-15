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
        {[...Array(5)].map((_, i) => <DisplayWords key={i} page={1} limit={10} level={i + 1}/>)}
        </div>
    </div>
  );
};
