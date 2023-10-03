import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faPenToSquare, faComment, faCommentDots, faChalkboardUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faComments } from '@fortawesome/free-regular-svg-icons';


export const MiddleMain = () => {
  return (
    <Wrapper>
      <Session>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" style={{ color: "black" }} />{' '}
        <p><b>Test your Vocabulary</b>  Knowledge <br/> and  Choose your word level to study. Here goes more explanations.</p>
      </Session>
      <Session>
        <FontAwesomeIcon icon={faChalkboardUser} size="2x" style={{ color: "black" }} />{' '}
        <p><b>Memorize Words</b> from selected level. <br/> Repeat and Repeat this steps until you can use those freely. <br/> </p>

      </Session>
      <Session>
        <FontAwesomeIcon icon={faComments} size="2x" style={{ color: "black" }} />{' '}
        <p><b>Go Outside,</b> Join Community that you can <br/> practice your vocab. Talk with your  <br/> friend and utilize the words</p>

      </Session>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
  
  @media (max-width: 768px) {
    margin-top: 12px;
  }
  
  `;

const Session = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12px;
  width: 320px;
  height: 250px;
  background-color: white;

  p {
    margin-top: 65px;
  }

  @media (max-width: 768px) {
    min-width: 140px;
    min-height: 170px;
    height: auto;
    margin-top: 24px;
    padding-left: 5px;
    font-size: 12px;
    p {
      margin-top: 12px;
    }
  }

`;

