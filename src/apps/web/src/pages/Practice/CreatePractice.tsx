import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';
import { FC, useCallback, useState } from 'react';
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
  query GetWordQuizOptions($answerWordID: ID!, $level: Int!) {
    option: getWordQuizOptions(answerWordID: $answerWordID, level: $level) {
      success
      error
      data {
        kor
        eng
      }
    }
  }
`;

export const CreatePractice: FC<CreatePracticeAttributes> = ({ level, type }) => {
  const [word, setWord] = useState<any | null>(null);

  const { 
    loading: wordLoading, 
    error: wordError, 
    data: wordData, 
    refetch: wordRefetch } = useQuery(GET_RANDOM_WORD, {
    variables: { level },
    onCompleted: data => {
      setWord(data.word.data[0]);
    },
  });

  const { 
    loading: optionLoading, 
    error: optionError, 
    data: optionData, 
  } = useQuery(GET_QUIZ_OPTIONS, {
    variables: { answerWordID: word?._id, level: level },
    skip: !word,
  });

  const handleAnswer = useCallback((selectedOption: string) => {
    const isAnswerCorrect = selectedOption === word?.eng;
    
    if (isAnswerCorrect) {
      wordRefetch().then((result) => {
        if (result?.data?.word?.data[0]) {
          setWord(result.data.word.data[0]);
        }
      });  
    };
  }, [word, wordRefetch]);
  

  if (wordLoading || optionLoading) return <div style={{display: 'none'}}>Loading...</div>;
  if (wordError || optionError) return <div style={{display: 'none'}}>Error...</div>;
  
  if (wordData?.word?.success && optionData?.option?.success) {
    const randomizedOptions = _.shuffle([
      wordData.word.data[0], 
      ...optionData.option.data
    ]);

    return (
      <Wrapper>
        <h2>{type ==='eng' && word.eng || type === 'kor' && word.kor}</h2>
        {randomizedOptions.map((option, index) => (
          <p 
          key={index} 
          onClick={() => handleAnswer(option.eng)}
          >
            {index + 1}: {
            type === 'eng' ? option.kor: type === 'kor'&& option.eng 
          }
          </p>          
        ))}  
      </Wrapper>
    );
  };

  return <div style={{display: 'none'}}>Error...</div>;
};

const Wrapper = styled.div`
`