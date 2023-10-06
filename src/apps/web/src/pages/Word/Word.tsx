import { gql, useQuery } from '@apollo/client';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useMemo, useState } from 'react';
import styled from 'styled-components';

import { WordTop } from './TopWord';
import { COLUMN_WIDTH } from '../../constants';

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
`;

const renderWords = (words: Word[]) => (
  words.map((Word: Word) => (
    <tr key={Word._id}>
      <td style={{ width: COLUMN_WIDTH }}>{Word.level}</td>
      <td style={{ width: COLUMN_WIDTH }}>{Word.eng}</td>
      <td style={{ width: COLUMN_WIDTH }}>{Word.kor}</td>
    </tr>
  ))
);

const PagenateWordsByLevel: FC<PagenateWordsByLevelProps> = ({page, level}) => {
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
          {renderWords(data.paginateWordByLevel.data)}
        </tbody>
      </Table>
    </div>
  );
};

export const Word: FC = () => {
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(1);
  const [level, setLevel] = useState(1);

  const levels = useMemo(() => {
    return [ 
      { id: 1 , label: 'A1' },
      { id: 2 , label: 'A2' },
      { id: 3 , label: 'B1' },
      { id: 4 , label: 'B2' },
      { id: 5 , label: 'C1' },
      { id: 6 , label: 'C2' },
    ];
  }, []);

  const goLeft = () => {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
    };
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
    };
  };

  return (
    <Wrapper>
       <LevelWrapper>
        <div>
          <h2>Choose Level</h2>
          {levels.map((level, index) => (
            <Button onClick={()=> {
              setLevel(level.id); 
              setIndex(0); 
              setPage(0);
            }} 
            key={index}>{level.label}
            </Button>
          ))}
        </div>
      </LevelWrapper>
      <WordTop 
        goLeft={goLeft} 
        goRight={goRight} 
        level={level} 
        index={index} 
      />

      <h3>Word List</h3>
      <PagenateWordsByLevel page={page} level={level}/>
      <ButtonWrapper>
        <FontAwesomeIcon 
          onClick={handlePreviousPage} 
          icon={faAngleDoubleLeft} 
          size='sm' 
          style={{ color: 'black' }} 
        />
        <FontAwesomeIcon 
          onClick={handleNextPage} 
          icon={faAngleDoubleRight} 
          size='sm' 
          style={{ color: 'black' }} 
        />
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