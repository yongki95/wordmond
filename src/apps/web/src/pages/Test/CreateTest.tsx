import { gql, useMutation, useQuery } from '@apollo/client';
import { shuffle } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAuth } from '../../auth';

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

const GET_USER_ID = gql`
  query GetUserIdByToken($userToken: String!) {
    getUserIdByToken(userToken: $userToken) {
      success
      error
      _id 
    }
  }
`

const SAVE_HISTORY = gql`
  mutation SaveHistory($data: HistoryInput!) {
    saveHistory(data: $data){
      success
      error
      _id
    }
  }
`
type data = {
  _id: string;
  eng: string;
  kor: string;
  __typename: string;
}

type ProblemObjType = {
  word: string;
  answer: string;
  choices: string[];
  userAnswer: null | string;
};

export const CreateTest: React.FC<{ level: number, type: string }> = ({ level, type }) => {
  const [word, setWord] = useState<data | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [submit, setSubmit] = useState<boolean | null>(null);
  const [questionHistory, setQuestionHistory] = useState<ProblemObjType[]>([]);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);

  useEffect(() => {
    if (count <= 9) {
      wordRefetch().then((result) => {
        if (result?.data?.word?.data[0]) {
          setWord(result.data.word.data[0]);
        }
      });
    }
  }, [count]);


  const [saveHistory] = useMutation<{saveHistoryResult: 
    {success: boolean; error?: string; _id: string;}}>(SAVE_HISTORY);

  const { token } = useAuth();

  const { loading: wordLoading, error: wordError, data: wordData, refetch: wordRefetch } = useQuery(GET_RANDOM_WORD, {
    variables: { level },
    onCompleted: data => {
      setWord(data.word.data[0]);
    },
  });

  const { loading: optionLoading, error: optionError, data: optionData, refetch: optionRefetch } = useQuery(GET_QUIZ_OPTIONS, {
    variables: { answerWordID: word?._id, level: level },
    skip: !word,
    onCompleted: data => {
      if(count < 10) {
        const problem = createProblemObj(wordData.word.data[0], optionData.option.data, type);
        setQuestionHistory([...questionHistory, problem]);
      }
    }
  });

  const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER_ID, {
    variables: { userToken: token },
    onCompleted: data => {
      setUserId(userData.getUserIdByToken._id);
    },
  });

  const createProblemObj = (problemData: data, optionDatas: data[], language: string): ProblemObjType => {
    if(language === "eng") {
      const problemObj = { 
        word: problemData.eng,
        answer: problemData.kor,
        choices: shuffle([problemData.kor, ...optionDatas.map(option => option.kor)]),
        userAnswer: null,
      }
      return problemObj;
    } else if(language === "kor") {
      const problemObj = { 
        word: problemData.kor,
        answer: problemData.eng,
        choices: shuffle([problemData.eng, ...optionDatas.map(option => option.eng)]),
        userAnswer: null,
      } 
      return problemObj;
    } else {
      throw new Error('invalid language')
    }

  }

  const handleAnswer = (answer: string, selectedOption: string,) => {
    if (selectedOption === answer) {
      setScore(score + 1);
    } 
    setCount(count + 1);

    const updatedQuestionHistory = [...questionHistory];
    if (updatedQuestionHistory.length > 0) {
      updatedQuestionHistory[updatedQuestionHistory.length - 1].userAnswer = selectedOption;
      setQuestionHistory(updatedQuestionHistory);
    }
  };


  const handleSubmit = useCallback(async () => {
    setSubmit(true); 
    setIsButtonVisible(false);

    const TestHistoryData = {
      user: userId,
      date: new Date().toISOString(),
      score: score,
      level: level,
      language: type,
      questions: questionHistory,
    }

    console.log('add...', JSON.stringify(TestHistoryData));

    const response = await saveHistory({
      variables: {
        data: TestHistoryData,
      }
    });

    console.log('add...Done', response.data?.saveHistoryResult)
    setQuestionHistory([]);

  }, [userId, score, level, type, questionHistory]);

  const handleRestart = () => {
    level = 0;
    type = '';
    setCount(0); 
    setScore(0); 
    setSubmit(false); 
    setIsButtonVisible(true);
  }

  if (wordLoading || optionLoading) return <div style={{display: "none"}}>Loading...</div>;
  if (wordError || optionError) return <div style={{display: "none"}}>Error...</div>;
  
  if (wordData?.word?.success && optionData?.option?.success) {
    const problem = createProblemObj(wordData.word.data[0], optionData.option.data, type);
    return (
      <Wrapper>
          {count < 10 && <h2>{problem?.word}</h2>}
          {count < 10 && problem?.choices.map((option, index) => (
            <p key={index} onClick={() => handleAnswer(problem?.answer, option)}>
              {index + 1}: {option}
            </p>
          ))}
        {count >= 10 && isButtonVisible && <button onClick={handleSubmit}>Submit Test</button>}
        {count >= 10 && submit &&
          <h2>{`your score is  ${score} out of 10`}</h2>
        }
        {count >= 10 && submit &&
          <button onClick={handleRestart}>restart</button>
        }
        </Wrapper>
    );
  }

  return <div style={{display: "none"}}>Error...</div>;
}

const Wrapper = styled.div`
`