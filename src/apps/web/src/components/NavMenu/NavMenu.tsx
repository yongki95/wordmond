import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const menuList = [
  { title: 'Home', url:'/'},
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
  )
}

const Wrapper = styled.div`
  display: flex;

  & ul {
    padding-left: 32px;
    width: 50px;
  }

  & a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    font-weight: bold;
  }

  & a:hover {
    font-size: 14px;
  }
`;

