import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const menuList = [
  { title: 'Home', url:'/'},
  { title: 'Words', url:'/'},
  { title: 'About', url:'/'},
]

export const NavMenu = () => {
  return (
    <Wrapper>
      {menuList.map((menu, index) => {
        return (
          <ul key={index}>
            <a href={menu.url}>{menu.title}</a>
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

