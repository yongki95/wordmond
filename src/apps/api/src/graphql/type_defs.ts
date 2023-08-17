import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar JSON

	type Word{
		_id: ID!
		level: Int!
		eng: String!
		kor: String!
	}

	type PaginateWordResult {
		success: Boolean!
		error: String
		total: Int
		data: [Word!]
	}
  
  type GetWordResult {
    success: Boolean!
    error: String
    data: Word
  }

	input WordInput {
		level: Int!
		eng: String!
		kor: String!
	}

	type CreateWordResult {
		success: Boolean!
		error: String
		_id: ID
	}

	type Query {
		paginateWord(
			query: JSON
			page: Int!
			limit: Int!
			sort: JSON
		): PaginateWordResult!

		getWord(
      _id: ID!
    ): GetWordResult!
	}

	type Mutation {
		createWord(
			data: WordInput!
		): CreateWordResult!
	}
`;
