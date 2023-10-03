import React, { FC, useMemo, useState } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { WordTop } from './TopWord';

const PAGINATE_WORDS_BY_LEVEL = gql`
  query PaginateWordByLevel($page: Int!, $limit: Int!, $level: Int!) {
    paginateWordByLevel( page: $page, limit: $limit, level: $level) {
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
`

const PagenateWordsByLevel: FC<{page: number, level: number}> = ({page, level}) => {
  const{ loading, error, data } = useQuery(PAGINATE_WORDS_BY_LEVEL, {
    variables: { page, limit: 10, level }
  });
  
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error! {error.message}</p>;
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Level</th>
            <th>English</th>
            <th>Korean</th>
          </tr>
        </thead>
        <tbody>
          {data.paginateWordByLevel.data.map((Word: any) => (
            <tr key={Word._id}>
              <td width={100}>{Word.level}</td>
              <td width={100}>{Word.eng}</td>
              <td width={100}>{Word.kor}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export const Word = () => {
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(1);
  const [level, setLevel] = useState(1);

  const levels = useMemo(() => {
    return [ 
      {level: 'A1', numLevel: 1},
      {level: 'A2', numLevel: 2},
      {level: 'B1', numLevel: 3},
      {level: 'B2', numLevel: 4},
      {level: 'C1', numLevel: 5},
      {level: 'C2', numLevel: 6},
    ];
  }, []);

  const goLeft = () => {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const goRight = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if(page > 1 ) {
      setPage(page - 1);
    }
  };

  return (
    <Wrapper>
       <LevelWrapper>
        <div>
          <h2>Choose Level</h2>
          {levels.map((level, index) => (
            <Button onClick={()=> {setLevel(level.numLevel); setIndex(0); setPage(0)}} key={index}>{level.level}</Button>
          ))}
        </div>
      </LevelWrapper>
      <WordTop goLeft={goLeft} goRight={goRight} level={level} index={index} />

      <h3>Word List</h3>
      <PagenateWordsByLevel page={page} level={level}/>
      <ButtonWrapper>
        <FontAwesomeIcon onClick={handlePreviousPage} icon={faAngleDoubleLeft} size="sm" style={{ color: "black" }} />{' '}
        <FontAwesomeIcon onClick={handleNextPage} icon={faAngleDoubleRight} size="sm" style={{ color: "black" }} />{' '}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const LevelWrapper = styled.div`
`;

const Button = styled.button`
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    background-color: #f0db4f;
    color: black;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

`;