import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';


export const BottomMain = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }  

  return (
    <Wrapper>
      <Top>
        <p> &emsp; To Join Our <br/> Wordmond</p>
        <p>User sign up and log in available soon</p>
      </Top>
      <Bottom>
        <form onSubmit={handleSubmit}>
          <Input type='email' placeholder='Your Email'></Input>
        </form>
        <Button type='submit'>
          <FontAwesomeIcon icon={faCircleArrowRight} size="5x" style={{ color: 'gray'}} />
        </Button>
      </Bottom>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 240px;
  margin-bottom: 240px;

  @media (max-width: 768px) {
    min-width: 460px;
    margin-top: 120px;
    margin-bottom: 120px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  font-weight: bold;
  
  & p { 
    margin: 0;
  }

  p ~ p {
    margin: 24px;
    font-size: 18px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-around ;
  align-items: center;
  margin-top: 60px;
`;

const Input = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: #f4e3dc;
  opacity: 0.4;
  border: none;
  font-size: 36px;
  font-weight: bold;
  
  &:focus {
    outline: none;
    color: black;
  }

  &::placeholder {
    font-weight: bold;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: white;
  
  &:hover { 
    color: blue;
  }
`;
