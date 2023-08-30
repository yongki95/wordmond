import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FC, useCallback, useMemo } from "react";
import styled from "styled-components";

type Word = {
  _id: string;
  level: number;
  eng: string;
  kor: string,
};

export const List = () => {
  const words = useMemo(() => {
    return [
      { _id: "1", level: 1, eng: "one", kor: "하나" },
      { _id: "2", level: 2, eng: "two", kor: "둘" },
      { _id: "3", level: 3, eng: "three", kor: "셋" },
      { _id: "4", level: 1, eng: "one", kor: "하나" },
      { _id: "5", level: 2, eng: "two", kor: "둘" },
      { _id: "6", level: 3, eng: "three", kor: "셋" },
      { _id: "7", level: 1, eng: "one", kor: "하나" },
      { _id: "8", level: 2, eng: "two", kor: "둘" },
      { _id: "9", level: 3, eng: "three", kor: "셋" },
      { _id: "10", level: 1, eng: "one", kor: "하나" },
      { _id: "11", level: 2, eng: "two", kor: "둘" },
      { _id: "12", level: 3, eng: "three", kor: "셋" },
      { _id: "13", level: 1, eng: "one", kor: "하나" },
      { _id: "14", level: 2, eng: "two", kor: "둘" },
      { _id: "15", level: 3, eng: "three", kor: "셋" },
      { _id: "16", level: 1, eng: "one", kor: "하나" },
      { _id: "17", level: 2, eng: "two", kor: "둘" },
      { _id: "18", level: 3, eng: "three", kor: "셋" },
      { _id: "19", level: 1, eng: "one", kor: "하나" },
      { _id: "20", level: 2, eng: "two", kor: "둘" },
      { _id: "21", level: 3, eng: "three", kor: "셋" },
      { _id: "22", level: 1, eng: "one", kor: "하나" },
      { _id: "23", level: 2, eng: "two", kor: "둘" },
      { _id: "24", level: 3, eng: "three", kor: "셋" },
      { _id: "25", level: 1, eng: "one", kor: "하나" },
      { _id: "26", level: 2, eng: "two", kor: "둘" },
      { _id: "27", level: 3, eng: "three", kor: "셋" },
      { _id: "28", level: 1, eng: "one", kor: "하나" },
      { _id: "29", level: 2, eng: "two", kor: "둘" },
      { _id: "30", level: 3, eng: "three", kor: "셋" },
      
    ];
  }, []);

  return (
    <Wrapper>  
      <form>
        <div>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Level</th>
                <th>Eng</th>
                <th>Kor</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>

            <tbody>
              {words.map((word) => (
                <tr key={word._id}>
                  <td width={50}>{word._id}</td>
                  <td width={50}>{word.level}</td>
                  <td>{word.eng}</td>
                  <td>{word.kor}</td>
                  <td><Delete word={word} /></td>
                  <td><Update word={word}/></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display:flex;
  padding: 5px 10px;
  padding-top: 0px;
  margin: 20px 10px;
  background-color: white; 
  width: 30%;
  overflow-y: scroll;
  min-width: 600px;
  max-height: 100%;
  justify-content: center;
  border-radius: 5px;
  `;

const Table = styled.table`
  width: 100%;
  min-width: 550px;
  font-size: 12px;
  border-collapse: collapse;
  
  thead { 
    position: sticky;
    top: 0;
    background: white;
  }

  tbody {
  }

  th {
    text-align: center;
    height: 50px;
  }

  td {
    padding: 3px 0;
    text-align: center;
    padding: 10px 20px;
  }

  tr + tr > td {
    border-top: 1px solid gray;
  }

  
`;

const Delete: FC<{word: Word}> = ({ word }) => {

  const handleDelete = useCallback(() => {
    alert(`Delete ${word._id}`);
  }, [word]);
  
  return (
    <div>
      <Button type="button" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} size="sm" style={{ color: "#aaa" }} />{' '}
      </Button>
    </div>
  )
};

const Update: FC<{word: Word}> = ({ word }) => {

  const handleDelete = useCallback(() => {
    alert(`Update ${word._id}`);
  }, [word]);
  
  return (
    <div>
      <Button type="button" onClick={handleDelete}>
        <FontAwesomeIcon icon={faPenToSquare} size="sm" style={{ color: "#aaa" }} />{' '}
      </Button>
    </div>
  )
};


const Button = styled.button`
  padding: 1px 5px;
  font-size: 11px;
  bakcground-color: #fff;
  border: 1px solid #ededed;
  border-radius: 4px;
  outline: none;
`
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 12px;
  padding: 3px 0;
  border-bottom: 1px solid #ddd;
`