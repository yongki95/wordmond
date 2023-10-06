import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth, useSetToken } from '../../auth';

const normalMenuList = [
  { title: 'Login', url:'/Login'},
  { title: 'Sign Up', url: '/Sign-Up'},
];

const userMenuList = [
  { title: 'Home', url:'/'},
  { title: 'Word', url:'/Word'},
  { title: 'Practice', url: '/Practice'},
  { title: 'Test', url:'/Test'},
  { title: 'History', url:'/History'},
];

export const NavMenu: FC = () => {
  const { hasSession } = useAuth();
  const setToken = useSetToken();
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  const handleLogout = useCallback(() => {
    setToken(null);
  }, [setToken]);

  const renderMenuList = (menuList: { title: string, url: string }[]) => (
    <>
      {menuList.map((menu, index) => (
        <li key={index}>
          <Link to={menu.url}>{menu.title}</Link>
        </li>
      ))}
    </>
  );

  return (
    <Wrapper>
      <MenuButton onClick={toggleMenu}>
        <FontAwesomeIcon 
          icon={faBars} 
          size='2x' 
          style={{ color: 'black' }} 
        />
      </MenuButton>
      <MenuItems isOpen={isOpen}>
        {!hasSession ? renderMenuList(normalMenuList) : (
          <>
            {renderMenuList(userMenuList)}
            <button onClick={handleLogout}>sign out</button>
          </>
        )}
      </MenuItems>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  display: none;
  border: 0;
  z-index: 1;
  background-color: white;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuItems = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
  }

  li {
    margin: 0;
    padding: 10px;
    font-size: 12px;
    font-weight: 500;
    color: gray;
    opacity: 0.7;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: black;
    opacity: 1;
    font-weight: bold;
  }
`;