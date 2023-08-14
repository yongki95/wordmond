import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createHttpLink } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:8000/',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetWords {
        Word {
          id
          level
          eng
          kor
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client = {client}>
    <App/>
  </ApolloProvider>
);

  // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();