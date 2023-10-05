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
		email: String!
		password: String!
		authroizedID: String!
		testHistories: [TestHistory!]!
	}

	type TestHistory {
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
		eamil: String!
		password: String!
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

	type GetUserIDByTokenResult {
		success: Boolean!
		error: String
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
		eamil: String!
		password: String!
	}

	input QuestionInput {
		word: String!
		answer: String!
		choices: [String!]!
		userAnswer: String!
	}

	input TestHistoryInput {
		user: ID!
		date: String!
		score: Int!
		level: Int!
		language: String!
		questions: [QuestionInput!]!
	}
	
	type GetUserAccountByTokenResult {
		success: Boolean!
		error: String
		eamil: String!
	}

	type SaveTestHistoryResult {
		success: Boolean!
		error: String
		_id: ID
	}

	type GetTestHistoriesByUserResult {
		success: Boolean!
		error: String
		data: [TestHistory!]
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

		getUserIdByToken(
			userToken: String!
		): GetUserIDByTokenResult!

		getUserAccountByToken(
			userToken: String!
		): GetUserAccountByTokenResult!

		getTestHistoriesByUser(
			userId: String!
		): GetTestHistoriesByUserResult!
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

		saveTestHistory(
			data: TestHistoryInput!
		): SaveTestHistoryResult!
	}
`;
