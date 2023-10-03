import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
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

export const CreateTest: React.FC<{ level: number, type: string }> = ({ level, type }) => {
  const [word, setWord] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [submit, setSubmit] = useState<boolean | null>(null);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);
  const [questionHistory, setQuestionHistory] = useState<any[]>([]);

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

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === word.eng) {
      setScore(score + 1);
      setCount(count + 1);
      wordRefetch().then((result) => {
        if (result?.data?.word?.data[0]) {
          setWord(result.data.word.data[0]);
        }
      });
    } else {
      setCount(count + 1);
      wordRefetch().then((result) => {
        if (result?.data?.word?.data[0]) {
          setWord(result.data.word.data[0]);
        }
      });
      
    }
  };

  function shuffleArray(array: any[]) { //lodash
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  if (wordLoading || optionLoading) return <div style={{display: "none"}}>Loading...</div>;
  if (wordError || optionError) return <div style={{display: "none"}}>Error...</div>;
  
  if (wordData?.word?.success && optionData?.option?.success) {
    const shuffledArray = shuffleArray([wordData.word.data[0], ...optionData.option.data]);    
    
    console.log(shuffledArray);
    return (
      <Wrapper>
        {count < 10 &&  
          <h2>{type ==='eng' && word.eng || type === 'kor' && word.kor}</h2> }
          {count < 10 && shuffledArray.map((option, index) => (
            <p key={index} onClick={() => handleAnswer(option.eng)}>
              {index + 1}: {type === 'eng' && option.kor || type === 'kor' && option.eng}
            </p>          
          ))}  
        {count >= 10 && isButtonVisible && <button onClick={() => {setSubmit(true); setIsButtonVisible(false)}}>Submit Test</button>}
        {count >= 10 && submit &&
          <h2>{`your score is ${score} out of 10`}</h2>
        }
        {count >= 10 && submit &&
          <button onClick={() => {setCount(0); setScore(0); setSubmit(false); setIsButtonVisible(true)}}>restart</button>
        }
        </Wrapper>
    );
  }

  return <div style={{display: "none"}}>Error...</div>;
}

const Wrapper = styled.div`
`