import { gql, useQuery } from '@apollo/client';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useAuth } from '../../auth';
import { COLUMN_WIDTH } from '../../constants';
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
`;

const renderWords = (words: Word[]) => (
  words.map((Word: Word) => (
    <tr key={Word._id}>
      <td style={{width: COLUMN_WIDTH}}>{Word.level}</td>
      <td style={{width: COLUMN_WIDTH}}>{Word.eng}</td>
      <td style={{width: COLUMN_WIDTH}}>{Word.kor}</td>
    </tr>
  ))
);

const PagenateWordsByLevel: FC<PagenateWordsByLevelProps> = ({ page, level }) => {
  useAuth(true);

  const { 
    loading, 
    error, 
    data,
  } = useQuery(PAGINATE_WORDS_BY_LEVEL, {
    variables: { 
      page, 
      limit: 10, 
      level, 
    },
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

  useAuth();

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

  const handleClick = useCallback((id: number) => {
    setLevel(id); 
    setIndex(0); 
    setPage(0);
  }, [setLevel, setIndex, setPage]);

  return (
    <Wrapper>
      <LevelWrapper>
        <LevelTitle>Choose Level</LevelTitle>
        <ButtonGroup>
          {
            levels.map((level, index) => (
              <Button onClick={()=> {handleClick(level.id)}} 
              key={index}>{level.label}
              </Button>
            ))
          }
        </ButtonGroup>
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
        <IconButton 
          onClick={handlePreviousPage} 
          icon={faAngleDoubleLeft} 
        />
        <IconButton 
          onClick={handleNextPage} 
          icon={faAngleDoubleRight} 
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
`;

const LevelWrapper = styled.div`
  margin-bottom: 20px;
`;

const LevelTitle = styled.h2`
  margin-bottom: 10px;
  color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  color: white;
  font-weight: bold;
  background-color: #9fb9e2;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const IconButton = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #9fb9e2;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 8px;
    text-align: left;
    color: black;
  }

  tr:nth-child(even) {
    background-color: #D5DEDE;
    color: black;
  }

  tr:nth-child(odd) {
    background-color: #ffffff;
    color: #black;
  }

  th {
    background-color: #9fb9e2;
    color: white;
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
