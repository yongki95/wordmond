import { gql, useQuery } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';

const GET_EVERY_WORD_BY_LEVEL = gql`
  query GetEveryWordsByLevel($level: Int!) {
    words: getEveryWordsByLevel(level: $level) {
      success
      error
      total
      data {
        level
        eng
        kor
      }
    }
  }
`;

export const WordFlashchard: React.FC<WordFlashCardProps> = ({ level, index }) => {
  const { loading, error, data } = useQuery(GET_EVERY_WORD_BY_LEVEL, {
    variables: { level }
  });

  if (loading) {
    return <div></div>;
  };

  if (error) {
    return <div style={{display: 'none'}}>error...</div>;
  };

  if (data.words.success) {
    return (
      <Wrapper>
        {index + 1}
        <h2>Eng: {data.words.data[index].eng}</h2>
        <p>Kor: {data.words.data[index].kor}</p>
      </Wrapper>
    );
  };
  return <div style={{display: 'none'}}>error...</div>;
};

const Wrapper = styled.div`
  border: 1px solid black;
`;