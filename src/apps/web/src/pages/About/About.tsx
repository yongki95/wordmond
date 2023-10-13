import { FC } from 'react';
import { styled } from 'styled-components';

export const About: FC = () => {
  return (
    <Wrapper>
      <h3>About Wordmond</h3>
      <p>
        Wordmond is a website helping people who English
        is not first language to memorize Eglish Words
      </p>
      <p>Words in Wordmond is from Oxford 3000 and Oxford 5000</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5% 20%;
`;
