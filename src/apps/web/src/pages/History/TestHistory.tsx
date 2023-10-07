import { gql, useQuery } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../auth';

const GET_TEST_HISTORIES_BY_USER = gql`
  query GetTestHistoriesByUser($userId: String!) {
    history: getTestHistoriesByUser(userId: $userId) {
      success
      error
      data {
        date
        score
        level
        language
        questions {
          word
          answer
          choices
          userAnswer
        }
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

export const TestHistory: FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { token } = useAuth();

  const { loading, error, data } = useQuery(GET_USER_ID, {
    variables: { userToken: token },
    onCompleted: data => {
      setUserId(data.getUserIdByToken._id);
    }
  });

  const { 
    loading: testHistoryLoading,
    error: testHistoryError, 
    data: testHistoryData
  } = useQuery(GET_TEST_HISTORIES_BY_USER, {
    variables: { userId: userId},
    skip: !userId,
  });

  if (loading || testHistoryLoading) return <div style={{display: 'none'}}>Loading...</div>;
  if (error || testHistoryError) return <div style={{display: 'none'}}>Error...</div>;
  
  if (data?.getUserIdByToken.success || 
    testHistoryData?.getUserTestHistory.success) {
    const selectedTestData = testHistoryData?.history.data.find(
      (test: any) => String(test.date) === selectedDate
    );

    return (
      <Wrapper>
      <select 
      value={selectedDate || ''} 
      onChange={(e) => setSelectedDate(e.target.value)}
      >
        <option>select date</option>
        {testHistoryData?.history.data.map((test: any, index: number) => (
          <option key={index} value={test.date}>
            {new Date(Number(test.date)).toLocaleDateString()}
          </option>
        ))}
      </select>

      {selectedTestData && (
        <div>
          <h3>
            날짜: {new Date(Number(selectedTestData.date)).toLocaleDateString()}
          </h3>
          <p>레벨: {selectedTestData.level}</p>
          <p>테스트 타입: {selectedTestData.language}</p>
          <p>점수: {selectedTestData.score}/10</p>
          <ul>
            {selectedTestData.questions.map((question: any, qIndex: number) => (
              <li key={qIndex}>
                단어: {question.word} -- 
                사용자 응답: {question.userAnswer} -- 
                정답: {question.answer}
              </li>
            ))}
          </ul>
        </div>
      )}
      </Wrapper>
    );
  }

  return <div style={{display: 'none'}}>Error...</div>;
}

const Wrapper = styled.div`
`;