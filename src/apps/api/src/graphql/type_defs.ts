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

  type DeleteWordIdResult {
    success: Boolean!
    error: String
  }

  type deleteWordByFieldResult {
    success: Boolean!
    error: String
  }

  type UpdateWordKorResult {
    success: Boolean!
    error: String
  }

  type SearchWordResult {
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

    searchWord(
      term: String!
    ): SearchWordResult!
	}

	type Mutation {
		createWord(
			data: WordInput!
  ): CreateWordResult!

		deleteWordById(
			_id: ID!
		): DeleteWordIdResult!

    updateWordKor(
		  eng: String!
		  kor: String!
    ): UpdateWordKorResult!
	}
`;
