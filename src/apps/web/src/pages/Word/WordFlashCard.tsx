import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
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
  const [flipped, setFlipped] = useState(false);

  const { 
    loading, 
    error, 
    data, 
  } = useQuery(GET_EVERY_WORD_BY_LEVEL, {
    variables: { 
      level 
    },
  });

  if (loading) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  };

  if (error) {
    return <ErrorWrapper>Error!</ErrorWrapper>;
  };

  if (data.words.success) {
    return (
      <CardWrapper onClick={() => setFlipped(!flipped)} flipped={flipped}>
        <CardFront>
          <Index>{index + 1}</Index>
          <WordEng>{data.words.data[index].eng}</WordEng>
        </CardFront>
        <CardBack>
          <Index>{index + 1}</Index>
          <WordKor>{data.words.data[index].kor}</WordKor>
        </CardBack>
      </CardWrapper>
    );
  };

  return <ErrorWrapper>Error!</ErrorWrapper>;
};

const LoadingWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const ErrorWrapper = styled.div`
  padding: 20px;
  text-align: center;
  color: red;
`;

const CardWrapper = styled.div<{ flipped: boolean }>`
  border-radius: 8px;
  width: 600px; 
  min-height: 150px; 
  perspective: 1000px;
  
  &:hover {
    cursor: pointer;
  }
  
  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
  
  & > div:first-child {
    transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  }
  
  & > div:last-child {
    background-color: #f9f9f9;
    transform: ${(props) => (props.flipped ? 'rotateY(0deg)' : 'rotateY(-180deg)')};
  }
`;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const CardBack = styled(CardFront)`
  background-color: #f9f9f9;
`;

const Index = styled.div`
  background-color: #f9f9f9;
  color: black;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const WordEng = styled.h2`
  color: black;
`;

const WordKor = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
