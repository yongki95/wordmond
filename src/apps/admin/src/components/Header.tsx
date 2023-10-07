import { FC } from 'react';
import styled from 'styled-components';
export const Header: FC<{headerName: string}> = ({headerName}) => {
  return (
    <Wrapper>
      <MenuName>{headerName}</MenuName>

      <Spacer />

      <UserInfo>
        <Avatar>C</Avatar>
      </UserInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  min-height:56px;
  background-color: #171c1d;
  padding: 0 20px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
`;

const MenuName = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const Spacer = styled.div`
  flex: 1;
`;

const UserInfo = styled.div`
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #338022;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #2a6e1b;
    transform: scale(1.1);
  }

  &:active {
    background-color: #338022;
    transform: scale(0.95);
  }
`;
