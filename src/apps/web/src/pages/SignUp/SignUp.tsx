import { gql, useMutation } from '@apollo/client';
import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SIGN_UP = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      success
      error
      _id
    }
  }
`;

export const SignUp: FC = () => {
  const [userName, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [signupSuccess, setSignupSuccess] = useState<string>('');
  const [createUser] = useMutation<{createUser: {success: boolean; error?: string; _id: string;}}>(SIGN_UP)
  const navigate = useNavigate();


  const validateUserName = (userName: string) => {
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (userName.length <= 6) {
      return false;
    }

    if (regex.test(userName) !== true) {
      return false;
    }

    return true;
  }

  const validatePassword = (password: string) => {
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(password.length <= 6) {
      return false;
    }

    if(regex.test(password) !== false) {
      return false;
    }

    return true;
  }

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      userName,
      password,
      email
    }
    console.log('add...', JSON.stringify(user));

    const response = await createUser({
      variables: {
        data: user,
      }
    });

    console.log('add...Done', response.data?.createUser._id)
    
    if(response.data?.createUser.success) {
      navigate('/Login');
      setSignupSuccess('Success');
    } else {
      setSignupSuccess('Fail');
    }
  }, [userName, password, email]);


  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Sign Up</button>
      </form>
      {signupSuccess === 'Fail' && <h2>sign up failed</h2>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
`