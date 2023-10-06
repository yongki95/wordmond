import { FC } from 'react';
import styled from 'styled-components';

export const FlipCard: FC<FlipCardAttributes> = (dimensionsAttributes) => {
  const dimensions = {
    width: `${dimensionsAttributes.width}`,
    height: `${dimensionsAttributes.height}`,
  };

  return (
    <Wrapper style={dimensions}>
      <FlipCardWrapper style={dimensions}>
        <InnerCard>
          <Front>
            Abroad
          </Front>
          <Back>
            <h1>Adverb</h1>
            <p>Eng: in or to a foreign country or countries</p>
            <p>kor: 해외에서</p>
          </Back>
        </InnerCard>
      </FlipCardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display:flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const FlipCardWrapper = styled.div`
  background-color: transparent;
  perspective: 1000px; 
  border-radius: 5px;
`;

const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 5px;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #9fb9e2;
  color: white;
  font-size: 54px;
  border-radius: 5px;
`;

const Back = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #9fb9e2;
  color: white;
  transform: rotateY(180deg);
  border-radius: 5px;
`;