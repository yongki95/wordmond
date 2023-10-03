import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const menuList = [
  { title: 'Dashboard', url:'/UserDashboard'},
  { title: 'Word', url:'/Word'},
  { title: 'About', url:'/About'},
]

export const NavMenu = () => {
  return (
    <Wrapper>
      {menuList.map((menu, index) => {
        return (
          <ul key={index}>
            <Link to={menu.url}>{menu.title}</Link>
          </ul>
        )
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  & ul {
    padding: 0;
    font-size: 16px;
    font-weight: bold;
  }

`;