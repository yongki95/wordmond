import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

client
	.query({
		query: gql`
			type Word{
				id: ID!
				level: Int!
				eng: String!
				kor: String!
			}

			type Query {
				words(page: Int, limit: Int, level: Int!): [Word!]!
			}
		`,
	})
	.then((result) => console.log(result));
