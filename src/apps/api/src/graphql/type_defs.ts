import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar JSON

	type Word{
		_id: ID!
		level: Int!
		eng: String!
		kor: String!
	}

	type User {
		_id: ID!
		userName: String!
		password: String!
		email: String!
		authroizedID: String!
		histories: [History!]!
	}

	type History {
		_id: ID!
		user: User!
		date: String!
		score: Int!
		level: Int!
		language: String!
		questions: [Question!]!
	}

	type Question {
		_id: ID!
		word: String!
		answer: String
		choices: [String!]!
		userAnswer: String!
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

	input CreateUserInput {
		userName: String!
		password: String!
		email: String!
	}

	type CreateUserResult {
		success: Boolean!
		error: String
		_id: ID
	}
	
	type CreateWordResult {
		success: Boolean!
		error: String
		_id: ID
	}

	type GetUserIDResult {
		success: Boolean!
		_id: ID
	}

	type GetWordByLevelResult {
		success: Boolean!
		error: String
		total: Int
		data: [Word]
	}

	type GetRandomWordResult {
		success: Boolean!
		error: String
		data: [Word!]
	}

	type GetWordQuizOptionsResult {
		success: Boolean!
		error: String
		data: [Word!]!
	}

	type GetEveryWordsByLevelResult {
		success: Boolean!
		error: String
		total: Int!
		data: [Word!]!
	}

	type PaginateWordByLevelResult {
		success: Boolean!
		error: String
		total: Int!
		data: [Word!]
	}

	input LoginInput {
		userName: String!
		password: String!
	}

	input QuestionInput {
		word: String!
		answer: String!
		choices: [String!]!
		userAnswer: String!
	}
	
	type SaveQuestionResult {
		success: Boolean!
		error: String
		_id: ID
	}

	type LoginUserResult {
		success: Boolean!
		error: String
		authorizedID: ID
	}
	
	type Query {
		paginateWord(
			query: JSON
			page: Int!
			limit: Int!
			sort: JSON
		): PaginateWordResult!

		paginateWordByLevel(
			query: JSON
			page: Int!
			limit: Int!
			sort: JSON
			level: Int!
			): PaginateWordByLevelResult!

		getWord(
      _id: ID!
    ): GetWordResult!

    searchWord(
      term: String!
    ): SearchWordResult!

		getWordByLevel(
			skip: Int!
			level: Int!
		): GetWordByLevelResult!
		
		getRandomWord(
			level: Int!
		): GetRandomWordResult!

		getWordQuizOptions(
			answerWordID: ID!
			level: Int!
		): GetWordQuizOptionsResult!

		getEveryWordsByLevel(
			level: Int!
		): GetEveryWordsByLevelResult!

		getUserId(
			userName: String!
		): GetUserIDResult!
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

		createUser(
			data: CreateUserInput!
		): CreateUserResult

		loginUser(
			data: LoginInput!
		): LoginUserResult!

		saveQuestion(
			data: QuestionInput!
		): SaveQuestionResult!
	}
`;
