import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Word{
        id: ID!
        level: Int!
        eng: String!
        kor: String!
    }    

    type Query {
        words(page: Int, limit: Int, level: Int!): [Word!]!
    }
`;