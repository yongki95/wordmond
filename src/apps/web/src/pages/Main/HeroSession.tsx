import React from 'react';
import styled from 'styled-components'
import logo from '../../hero_image/8576.jpg';
import { Link } from 'react-router-dom';


export const HeroSession = () => {
  return (
    <Wrapper>
      <HeroText>
        <TextWrapper>
          <p>Learn <br/> English Word</p>
          <p>Memorize Words from Oxford 3000  <br/> and Oxford 5000 to improve your  <br/> English Vocabulary.
            Speak with people <br/> without afraid of Vocabulary.
          </p>          
          <Button> 
            <Link to='/Login'>Get Started</Link>
          </Button>
        </TextWrapper>
      </HeroText>
      <HeroImage>
        <img src={logo} alt="Logo" />
        <a href="https://www.freepik.com/free-vector/schoolboy-standing-books-raising-hand-speaking-pupil-reading-home-task-report-flat-vector-illustration-school-education-knowledge_10173517.htm#query=education&position=5&from_view=search&track=sph"></a> 
        <p style={{display: 'none'}}>Image by pch.vector on Freepik</p>
      </HeroImage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 46px;
  min-height: 350px;
  object-fit: contain;

  @media (max-width: 768px) {
    display: flex;
    padding: 60px 0;
    align-item: center;
  }

`;

const HeroText = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 0;
  width: 22em;
  position: relative;

  & p {
    font-size: 54px;
    font-weight: bold;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  & p + p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

const HeroImage = styled.div`
  display: flex;
  flex-direction: column;  

  & img {
    width: 25em;
    height: auto;
    min-width: 250px;
    position: relative;
  }

  & a {
    position: absolute;
    top: 425px;
    left: 1090px;
    text-decoration: none;
    color: black;
    object-fit: contain;
  }

  @media (max-width: 1200px) {
    display: none;
  }

`;

const Button = styled.button`
  position: absolute;
  top:110%;
  border:none; 
  border-radius:10px; 
  padding:15px;
  min-height:30px; 
  min-width: 120px;
  background-color: #9fb9e2;
  cursor: pointer;

  & a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    font-weight: bold;
  }

  &:hover {
    background-color: #0056b3
  }

  &:visited {
    color: white;
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`
