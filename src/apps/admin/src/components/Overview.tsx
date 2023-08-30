import { faPenToSquare, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useCallback } from "react";
import { styled } from "styled-components";

export const Profile = () => {
  return (
    <Wrapper>
      <Overview>
        <NameContainer>
          <div>
            Courage Kim
          </div>
          <Spacer/>
          <div>
            @Courage
          </div>
        </NameContainer>
        <Spacer />
        <Circle>
          <Delete/>
          <div>
            C
          </div>
        </Circle>
        <Update/>  
        <SomeInfo>
          <div>
            Upload a new picture. Larger Image will be resized automatically.        
          </div>
        </SomeInfo>      
        <SignUpDate>
          Member Since:
          <div>
            29 July 2023
          </div>
        </SignUpDate>
      </Overview>        
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 500px;
  min-height: 500px;
  border-radius: 10px;
  min-width: 330px;
  margin: 35px 30px;
`;

const NameContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  & > div {
    font-weight: 500;
    font-size: 24px;
  }

  & > div + div {
    font-weight: 500;
    font-size: 12px;
  }
`;


const Circle = styled.div`
  height: 120px;
  width: 120px;
  min-height: 120px;
  min-width: 120px;
  background-color: green;
  border-radius: 50%;
  margin-top: 20px;
  position: relative;

  & div {
    position: absolute;
    left: 35%;
    top: 24%;
    font-size: 52px;
    color: white;
  }

  & button {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 45px;
    top: -45px;
    background-color: #858b97;
    border: none;
    border-radius: 100%;
  }
`;

const SomeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  width: 250px;
  height: 80px;
  min-height: 80px;
  background-color: #f0f0f0;
  border: 1px solid #c0c5ce;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 250;
  text-align: center;

  & div {
    width: 200px;
  }
`;

const SignUpDate = styled.div`
display: flex;  
font-size: 12px;
margin-top: 24px;

& div {
  font-weight: 700;
}
`;

const Spacer = styled.div`
  height: 12px;
`;

const Delete = () => {
  const handleDelete = useCallback(() => {
    alert('Delete Picture')
  }, []);

  return (
    <div>
      <Button type="button" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} size="sm" style={{ color: "white" }} />{' '}
      </Button>
    </div>
  )
}


const Update = () => {
  const handleUpdate = useCallback(() => {
    alert(`Update Picture`);
  }, []);
  
  return (
    <div>
      <Button type="button" onClick={handleUpdate}>
        Update Picture
      </Button>
    </div>
  )
};


const Button = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 20px;
  padding: 1px 5px;
  background-color: #FF7900;
  border: 1px solid #ededed;
  border-radius: 4px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 500;
  opacity: 1;

  &:active {
    opacity: 0.5;
  }
`;
