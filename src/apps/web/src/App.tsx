// //import React from 'react';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';

// const GET_WORD = gql`
//   query GetWords {
//     words {
//       level
//       eng
//       kor
//     }
//   }
// `;

// function DisplayWords() {
//   const { loading, error, data } = useQuery(GET_WORD);

//   console.log(data); 
//   return data.words.map(({ level, eng, kor}: any) => (
//     <div key={level}>
//       <b>{eng} - {kor}</b>
//     </div>
//   ));
// }
const GET_LOCATIONS = gql`
  query GetWords {
    Word {
      id
      level
      eng
      kor
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.Word);
    
  return data.Word.map(({ id, level, eng, kor }: any) => (
    <div key={id}>
      <h3>{level}</h3>
      <br />
      <b>About this location:</b>
      <p>{eng} - {kor}</p>
      <br />
    </div>
  ));
}


export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
  );
}