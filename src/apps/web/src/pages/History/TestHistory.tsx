import { gql, useQuery } from '@apollo/client';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { useAuth } from '../../auth';

const GET_USER_TEST_HISTORIES = gql`
  query MeAndMyTestHistory($page: Int!, $limit: Int!) {
    me {
      paginateTestHistory(page: $page, limit: $limit) {
        success
        total
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
  }
`;

export const TestHistory: FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  useAuth(true);

  const { 
    loading, 
    error, 
    data,
  } = useQuery(GET_USER_TEST_HISTORIES, {
    variables: { 
      page: currentPage,
      limit: 10, 
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const selectedTestData = data.me.paginateTestHistory.data.find((test: TestHistory) => test.date === selectedDate);
  
  return (
    <Wrapper>
      <DateList>
        {
          data.me.paginateTestHistory.data.map((test: TestHistory) => (
            <DateItem key={test.date} onClick={() => setSelectedDate(test.date)}>
              {new Date(Number(test.date)).toLocaleDateString()}
            </DateItem>
          ))
        }
      </DateList>

      <Pagination>
        <PrevButton 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          이전 페이지
        </PrevButton>
        <NextButton 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={data.me.paginateTestHistory.total <= currentPage * limit}
        >
          다음 페이지
        </NextButton>
      </Pagination>

      {
        selectedTestData && (
          <TestDetails>
            {
              selectedTestData.questions.map((question: QuestionObjType, qIndex: number) => (
                <Question key={qIndex}>
                  <Word>
                    {question.word} 
                    {
                      question.userAnswer === question.answer ? 
                        <CorrectMark>✅ Correct</CorrectMark> : <IncorrectMark>❌ Wrong</IncorrectMark>
                    }
                  </Word>
                  <Choices>
                    {
                      question.choices.map((choice: string, cIndex: number) => (
                        <Choice 
                          key={cIndex} 
                          isUserChoice={choice === question.userAnswer} 
                          isCorrectAnswer={choice === question.answer}
                        >
                          {choice}
                          {
                            choice === question.userAnswer && (
                              <b> Your Answer</b>
                            )
                          }
                          {
                            choice === question.answer && choice !== question.userAnswer && (
                              <b>Correct Answer</b>
                            )
                          }
                        </Choice>
                      ))
                    }
                  </Choices>
                </Question>
              ))
            }
          </TestDetails>
        )
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DateList = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 20px;
`;

const DateItem = styled.button`
  margin-left: 18px;
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const TestDetails = styled.div`
  margin-top: 1rem;
`;

const Question = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const Word = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Choices = styled.ul`
  margin-top: 1rem;
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const Choice = styled.li<{ isUserChoice: boolean, isCorrectAnswer: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({isUserChoice}) => isUserChoice ? '#ffd1a1' : 'transparent'};
  border: ${({isCorrectAnswer}) => isCorrectAnswer ? '1px solid green' : '1px solid transparent'};
  padding: 0.5rem;
  border-radius: 4px;
`;

const CorrectMark = styled.span`
  color: green;
`;

const IncorrectMark = styled.span`
  color: red;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PrevButton = styled.button`
  margin-right: 1rem;
`;

const NextButton = styled.button`
`;
