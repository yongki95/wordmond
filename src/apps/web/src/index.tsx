import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// import { client } from './apollo_client';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <ApolloProvider client = { client } >
//       <App/>
//     </ApolloProvider>
//   </React.StrictMode>
// );


export const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

// client
// 	.query({
// 		query: gql`
// 			query {
// 				words(page: Int, limit: Int, level: Int!): [Word!]!
// 			}
// 		`,
// 	})
// 	.then((result) => console.log(result));

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