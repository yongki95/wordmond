import { gql } from '@apollo/client';

export const GET_WORD = gql`
query GetWords($page: Int!, $limit: Int!, $level: Int!) {
  words(page: $page, limit: $limit, level: $level) {
    id
    level
    eng
    kor
  }        
}
`;
