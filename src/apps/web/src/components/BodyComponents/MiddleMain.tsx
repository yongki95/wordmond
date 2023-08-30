import React from "react";
import { styled } from "styled-components";

import { LevelCard } from "./LevelCard";

export const MiddleMain = () => {
  return (
    <Wrapper>
      <LevelCard level={1} styles={{width: 350, height: 200, backgroundColor: '#97ecf1'}}/>
      <LevelCard level={2} styles={{width: 350, height: 200, backgroundColor: '#ffcbcb'}}/>
      <LevelCard level={3} styles={{width: 350, height: 200, backgroundColor: '#bdb2ff'}}/>
      <LevelCard level={4} styles={{width: 350, height: 200, backgroundColor: '#fad1fa'}}/>
      <LevelCard level={5} styles={{width: 350, height: 200, backgroundColor: '#fec868'}}/>
      <LevelCard level={6} styles={{width: 350, height: 200, backgroundColor: '#f1f7b5'}}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10%;
`;