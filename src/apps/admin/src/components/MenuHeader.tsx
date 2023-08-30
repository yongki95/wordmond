import styled from "styled-components";

export const MenuHeader = () => {
  return (
    <Wrapper>
      <Logo>
        Wordmod 
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  background-color: #171c1d;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Logo = styled.div`
  flex: 1;
  color: white;
  font-weight: bold;
  font-size: 20px;
  display:flex;
  align-items: center;
  padding-left: 16px;
`;
