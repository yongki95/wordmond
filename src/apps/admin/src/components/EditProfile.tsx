import { useCallback } from 'react';
import { styled } from 'styled-components';

export const EditProfile = () => {
  return (
    <Wrapper>
      <EditWindow>
          <Top>
            <WindowName>
              Edit Profile
            </WindowName>
            <Tap>
              User Info
              <Underline/>
            </Tap>
          </Top>
        <Form>
          <div>
            <div>
              <div>
                <label htmlFor='fristName'>First Name</label>
                <input type='text' id='firstName' name='firstName' placeholder='Courage'></input>
              </div>
              <div>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' placeholder='Kim'></input>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <label htmlFor='nickName'>Nick Name</label>
                <input type='text' id='nickName' name='nickName' placeholder='Courage'></input>
              </div>
              <div>
                <label htmlFor='eamil'>Email</label>
                <input type='email' id='email' name='email' placeholder='blahblah@eamil.email'></input>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' placeholder='**********'></input>
              </div>
              <div>
                <label htmlFor='confirmP'>Confirm Password</label>
                <input type='password' id='confirmP' name='confirmP' placeholder='***********'></input>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <label htmlFor='somethingDiff'>Something Diff</label>
                <input type='text' id='somethingDiff' name='somethingDiff' placeholder='somethingDiff'></input>
              </div>
              <div>
                <label htmlFor='somethingDiff2'>Something Diff2</label>
                <input type='text' id='somethingDiff2' name='somethingDiff2' placeholder='somethingDiff2'></input>
              </div>
            </div>
          </div>
          <Update/>
        </Form>
      </EditWindow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display:flex;
`;

const EditWindow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 90%;
  width: 720px;
  border-radius: 10px;
  min-width: 330px;
  margin: 35px 30px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d0d0ff;
  height: 140px;
  border-radius: 10px 10px 0 0;
  position: relative;
`;

const WindowName = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  font-size: 28px;
  font-weight: 700; 
`;

const Tap = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.8;
  position: absolute;
  left: 20px;
  top: 70px;  

  &:hover {
    & div {
      background-color: blue;
    }
  }
`;

const Underline = styled.div`
  width: 75px;
  height: 3px;
  background-color: black;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.8;
  position: absolute;
  top: 28px;
`;

const Form = styled.form`
  padding: 45px;  

  & label {
    color: gray;
    font-size: 12px;
    font-weight: 750;
    margin-bottom: 8px;
  }

  & div{
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  & div div {
    display: flex;
    flex-direction: row;
    margin-right: 100px;
  }

  & div div div {
    display: flex;
    flex-direction: column;
    
    input {
      width: 250px;
      height: 40px;
      border: 1px solid #bbb9c0; 
      border-radius: 3px;
    }

    input:focus {
      border: 1px solid #blue; 
    }

    input::placeholder {
      font-weight: 750;
      font-size: 12px;
      opacity: 1;
      color: black;
      padding-left: 10px;
    }
  }
`;

const Update = () => {
  const handleUpdate = useCallback(() => {
    alert(`Update Picture`);
  }, []);
  
  return (
    <div>
      <Button type='button' onClick={handleUpdate}>
        Update Info
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
