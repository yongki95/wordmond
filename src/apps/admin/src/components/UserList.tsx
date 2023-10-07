import { useMemo } from 'react';
import styled from 'styled-components';

type User = {
  _id: string;
  fullName: string;
  age: number;
  location: string;
  level: number;
};

export const UserList = () => {
  const users = useMemo(() => {
    return [
      {_id: 1, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},     
      {_id: 2, fullName: 'John Kim', age: 29, location: 'Seattle', level: 5},    
      {_id: 3, fullName: 'Peter Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 4, fullName: 'Brave Kim', age: 29, location: 'Seattle', level: 5},     
      {_id: 5, fullName: 'blah Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 6, fullName: 'something Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 7, fullName: 'cat Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 8, fullName: 'dog Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 9, fullName: 'word Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 10, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 11, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 12, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 13, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 14, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 15, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 16, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 17, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 18, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 19, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
      {_id: 20, fullName: 'Yongki Kim', age: 29, location: 'Seattle', level: 5},      
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
                <th>FullName</th>
                <th>Age</th>
                <th>Locatipn</th>
                <th>Level</th>
              </tr>
            </thead>

            <tbody>
              {users.map((users) => (
                <tr key={users._id}>
                  <td width={50}>{users._id}</td>
                  <td width={100}>{users.fullName}</td>
                  <td>{users.age}</td>
                  <td width={100}>{users.location}</td>
                  <td>{users.level}</td>
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
  padding:5px 10px;
  padding-top: 0px;
  margin: 20px 40px;
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


