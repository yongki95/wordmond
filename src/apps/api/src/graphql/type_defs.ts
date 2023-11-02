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
    token: String

    paginateTestHistory(
      query: JSON
      page: Int!
      limit: Int!
      sort: JSON
    ): PaginateTestHistoryResult!
  }

  type Auth {
    _id: ID!
    authType: String!
    authId: String!
  }

  type Question {
    _id: ID!
    word: String!
    answer: String
    choices: [String!]!
    userAnswer: String!
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

  type PaginateTestHistoryResult {
    success: Boolean!
    error: String
    total: Int
    data: [TestHistory!]
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
    email: String!
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
    email: String!
    password: String!
  }

  input TestQuestionInput {
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
    questions: [ID!]!
  }
  
  type GetUserAccountByTokenResult {
    success: Boolean!
    error: String
    email: String!
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

  type SaveTestQuestionResult {
    success: Boolean!
    error: String
    _id: ID!
  }

  type LoginUserResult {
    success: Boolean!
    error: String
    token: String
  }

  type GoogleLoginUserResult {
    success: Boolean!
    error: String
    token: String
  }

  type AuthenticateGoogleResult {
    success: Boolean!
    error: String
    token: String
  }

  type AuthenticateFacebookResult {
    success: Boolean!
    error: String
    token: String
  }

  type Query {
    me: User

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
      hmac: String!
    ): CreateUserResult!

    loginUser(
      data: LoginInput!
      hmac: String!
    ): LoginUserResult!

    saveTestQuestion(
      data: TestQuestionInput!
    ): SaveTestQuestionResult!

    saveTestHistory(
      data: TestHistoryInput!
    ): SaveTestHistoryResult!

    authenticateGoogle(
      googleResponse: String!
    ): AuthenticateGoogleResult!

    authenticateFacebook(
      responsedEmail: String!
      provider: String!
      providerSub: String!    
    ): AuthenticateFacebookResult!
  }
`;
