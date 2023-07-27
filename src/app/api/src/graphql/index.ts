import { gql } from "graphql-tag";

export const typeDefs = gql`
    type Word {
        level: Int!
        word: String
        mean: String
    }

    input WordInput {
        level: Int!
        word: String
        mean: String
    }

    type Query {
        hello: String
        word: [Word]
    }
    
    type Mutation {
        createWord(wordInput: WordInput): Word
    }
`;

export const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    },
    Mutation: {
        createWord()
    }
};

