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
  `;

  const SAVE_TEST_HISTORY = gql`
    mutation SaveTestHistory($data: TestHistoryInput!) {
      saveTestHistory(data: $data){
        success
        error
        _id
      }
    }
  `;

  const SAVE_TEST_QUESTION = gql`
    mutation SaveTestQuestion($data: TestQuestionInput!) {
      saveTestQuestion(data: $data) {
        success
        error
        _id
      }
    }
  `;

  export const CreateTest: React.FC<CreateTestProps> = ({ level, type }) => {
    const [word, setWord] = useState<data | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [submit, setSubmit] = useState<boolean | null>(null);
    const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);
    const [savedQuestionIds, setSavedQuestionIds] = useState<string[]>([]);
    const { token } = useAuth();

    const [saveTestHistory] = useMutation<{
      saveTestHistory: {
        success: boolean; 
        error?: string;
        _id?: string;
      },
    }>(SAVE_TEST_HISTORY);

    const [saveTestQuestion] = useMutation<{
      saveTestQuestion: {
        success: boolean;
        error?: string;
        _id: string;
      },
    }>(SAVE_TEST_QUESTION);

    useEffect(() => {
      if (count <= 9) {
        wordRefetch().then((result) => {
          if (result?.data?.word?.data[0]) {
            setWord(result.data.word.data[0]);
          };
        });
      };
    }, [count]);

    const { 
      loading: wordLoading,
      error: wordError, 
      data: wordData, 
      refetch: wordRefetch, 
    } = useQuery(GET_RANDOM_WORD, {
      variables: { 
        level, 
      },
      onCompleted: data => {
        setWord(data.word.data[0]);
      },
    });

    const { 
      loading: optionLoading, 
      error: optionError, 
      data: optionData,
    } = useQuery(GET_QUIZ_OPTIONS, {
      variables: { 
        answerWordID: word?._id, 
        level: level, 
      },
      skip: !word,
      onCompleted: data => {
        if(count <= 9) {
          const problem = createProblemObj(
            wordData.word.data[0], 
            optionData.option.data, 
            type,
          );
        };
      },
    });

    const { 
      loading: userLoading, 
      error: userError, 
      data: userData,
    } = useQuery(GET_USER_ID, {
      variables: { 
        userToken: token, 
      },
      onCompleted: userData => {
        setUserId(userData.getUserIdByToken._id);
      },
    });

    const createProblemObj = (
      problemData: data, 
      optionDatas: data[], 
      language: string,
    ): QuestionObjType => {
      if(language === 'eng') {
        const problemObj = { 
          word: problemData.eng,
          answer: problemData.kor,
          choices: shuffle([
            problemData.kor, 
            ...optionDatas.map(option => option.kor)
          ]),
          userAnswer: null,
        };

        return problemObj;
      } else if(language === 'kor') {
        const problemObj = { 
          word: problemData.kor,
          answer: problemData.eng,
          choices: shuffle([
            problemData.eng, 
            ...optionDatas.map(option => option.eng)
          ]),
          userAnswer: null,
        };

        return problemObj;
      } else {
        throw new Error('invalid language');
      };
    };

    const handleAnswer = useCallback(async (
        problemObj: QuestionObjType, 
        selectedOption: string
    ) => {
      const updatedProblemObj = {
        ...problemObj,
        userAnswer: selectedOption,
      };

      const response = await saveTestQuestion({
        variables: {
          data: updatedProblemObj,
        },
      });

      if(response.data?.saveTestQuestion.success) {
        setSavedQuestionIds([
          ...savedQuestionIds, 
          response.data?.saveTestQuestion._id,
        ]);
      };

      if (selectedOption === problemObj.answer) {
        setScore(score + 1);
      };

      if (count <= 9) {
        setCount(count + 1);
      };

    }, [saveTestQuestion, savedQuestionIds, setSavedQuestionIds]);

    const handleSubmit = useCallback(async () => {
      setSubmit(true); 
      setIsButtonVisible(false);

      const TestHistoryData = {
        user: userId,
        date: new Date().toISOString(),
        score: score,
        level: level,
        language: type,
        questions: savedQuestionIds,
      };

      const response = await saveTestHistory({
        variables: {
          data: TestHistoryData,
        },
      });

      setSavedQuestionIds([]);
    }, [userId, score, level, type, savedQuestionIds]);

    const handleRestart = () => {
      level = 0;
      type = '';
      setCount(0); 
      setScore(0); 
      setSubmit(false); 
      setIsButtonVisible(true);
    };

    if (wordLoading || optionLoading) return <div style={{display: 'none'}}>Loading...</div>;
    if (wordError || optionError) return <div style={{display: 'none'}}>Error...</div>;
    
    if (wordData?.word?.success && optionData?.option?.success) {
      const problem = createProblemObj(
        wordData.word.data[0], 
        optionData.option.data, 
        type,
      );
      return (
        <Wrapper>
          {
            count < 10 ? (
              <>
                <h2>{problem?.word}</h2>
                  {
                    problem?.choices.map((option, index) => (
                      <p key={index} onClick={() => handleAnswer(problem, option)}>
                          {index + 1}: {option}
                      </p>
                    ))
                  }
              </>
            ) : (
              <>
                {
                  isButtonVisible && (
                    <button onClick={handleSubmit}>Submit Test</button>
                  )
                }
                {
                  submit && (
                    <>
                      <h2>{`your score is ${score} out of 10`}</h2>
                      <button onClick={handleRestart}>restart</button>
                    </>
                  )
                }
              </>
            )
          }
        </Wrapper>
      );
    };

    return <div style={{display: 'none'}}>Error...</div>;
  };

  const Wrapper = styled.div`
  `;
