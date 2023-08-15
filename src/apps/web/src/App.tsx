// //import React from 'react';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_WORD = gql`
query GetWords($page: Int!, $limit: Int!, $level: Int!) {
  words(page: $page, limit: $limit, level: $level) {
    id
    level
    eng
    kor
  }        
}
`;

function DisplayWords({ page, limit, level}: any) {
  const { loading, error, data } = useQuery(GET_WORD, {
    variables: { page: page, limit: limit, level: level }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
    
  return data.words.map(({ id, level, eng, kor }: any) => (
    <p key={id}> {eng} - {kor}</p>
  ));
}


export default function App() {
  return (
    <div>
      <h2>Wordmond 🚀</h2>
      <br/>
      <div id='level_container'>
        <div className='level1'>
          <DisplayWords page={1} limit={10} level={1}/>
        </div>
        <div className='level2'>
          <DisplayWords page={1} limit={10} level={2}/>
        </div>
        <div className='level3'>
          <DisplayWords page={1} limit={10} level={3}/>
        </div>
        <div className='level4'>
          <DisplayWords page={1} limit={10} level={4}/>
        </div>
        <div className='level5'>
          <DisplayWords page={1} limit={10} level={5}/>
        </div>
      </div>
    </div>
  );
}