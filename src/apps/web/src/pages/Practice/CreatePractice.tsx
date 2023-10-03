import { gql, useQuery } from '@apollo/client';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const GET_RANDOM_WORD = gql`
  query GetRandomWord($level: Int!) {
    word: getRandomWord(level: $level) {
      success
      error
      data {
        _id
        level
        eng
        kor
      }
    }
  }
`;

const GET_QUIZ_OPTIONS = gql`
  query GetWordQuizOptions($answer: ID!, $level: Int!) {
    option: getWordQuizOptions(answer: $answer, level: $level) {
      success
      error
      data {
        kor
        eng
      }
    }
  }
`;

type CreatePracticeProps = {
  level: number;
  type: string;
};

export const CreatePractice: FC<CreatePracticeProps> = ({ level, type }) => {
  const [word, setWord] = useState<any | null>(null);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  const { loading: wordLoading, error: wordError, data: wordData, refetch: wordRefetch } = useQuery(GET_RANDOM_WORD, {
    variables: { level },
    onCompleted: data => {
      setWord(data.word.data[0]);
    },
  });

  const { loading: optionLoading, error: optionError, data: optionData, refetch: optionRefetch } = useQuery(GET_QUIZ_OPTIONS, {
    variables: { answerWordID: word?._id, level: level },
    skip: !word,
  });

  const handleAnswer = useCallback((selectedOption: string) => {
    if (selectedOption === word?.eng) {
      wordRefetch().then((result) => {
        if (result?.data?.word?.data[0]) {
          setWord(result.data.word.data[0]);
        }
      });
    } 
  }, []);

  // TODO: use insted lodash's suffle
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = useMemo(() => { // TODO: 변수명을 멋지게
    return shuffleArray([wordData.word.data[0], ...optionData.option.data]);
  }, [wordData, optionData]);

  if (wordLoading || optionLoading) return <div style={{display: "none"}}>Loading...</div>;
  if (wordError || optionError) return <div style={{display: "none"}}>Error...</div>;
  
  if (wordData?.word?.success && optionData?.option?.success) {
    return (
      <Wrapper>
        <h2>{type ==='eng' && word.eng || type === 'kor' && word.kor}</h2>
        {shuffledArray.map((option, index) => (
          <p key={index} onClick={() => handleAnswer(option.eng)}>
            {index + 1}: {type === 'eng' && option.kor || type === 'kor' && option.eng}
          </p>          
        ))}  

      </Wrapper>

    );
  }

  return <div style={{display: "none"}}>Error...</div>;
}

const Wrapper = styled.div`
`