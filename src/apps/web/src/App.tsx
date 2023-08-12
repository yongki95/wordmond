//import React from 'react';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';
// import { WordItem } from './components/WordItem'

// const GET_WORDS = gql`
//     type Query {
//         words(page: Int, limit: Int, level: Int!): [Word!]!
//     }
// `;

// const App: React.FC = () => {
//   const { loading, error, data } = useQuery(GET_WORDS);

//   return (
//     <div className="App">
//       {data.words.map((item: any) => <WordItem key={item._id} {...item} />)}
//     </div>
//   );
// };

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}
