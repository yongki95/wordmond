import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const PAGINATE_WORDS = gql`
  query PaginateWords($page: Int!, $limit: Int!) {
    paginateWord( page: $page, limit: $limit) {
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

const PagenateWords: FC<{page: number}> = ({page}) => {
  const{ loading, error, data } = useQuery(PAGINATE_WORDS, {
    variables: { page, limit: 10}
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
          {data.paginateWord.data.map((Word: any) => (
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
      <h3>Word List</h3>
      <PagenateWords page={page} />
      <ButtonWrapper>
        <FontAwesomeIcon onClick={handlePreviousPage} icon={faAngleDoubleLeft} size="sm" style={{ color: "black" }} />{' '}
        <FontAwesomeIcon onClick={handleNextPage} icon={faAngleDoubleRight} size="sm" style={{ color: "black" }} />{' '}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5% 20%;
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