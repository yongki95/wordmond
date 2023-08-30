import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome'
import { faKiwiBird, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { FC, ReactPropTypes } from 'react';

type Info = {
    count: number;
    sessionName: string;
}

export const InfoSession : FC<{props: Info}> = ({props}) => {
    return (
        <Wrapper>
        <div>
            {props.count}
        </div>
        <div>
            {props.sessionName}
        </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: start;
  justify-content: center;

  & > div {
    color: white;
    padding-top: 10px;
    padding-left: 30px;
    font-weight: 500;
    font-size: 60px;
  }

  & > div + div {
    font-size: 30px;
    font-weight: none;
    opacity: 0.6;
    font-weight: 400;
    padding-bottom: 12px;
    
  }

  & ~ svg {
    position: absolute;
    left: 70%;
    opacity: 0.2;
  }

`;

