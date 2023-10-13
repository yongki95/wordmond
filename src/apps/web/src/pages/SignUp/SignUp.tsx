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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signupSuccess, setSignupSuccess] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();  
  
  const [createUser] = useMutation<{
    createUser: {
      success: boolean;
      error?: string;
     _id: string;
    },
  }>(SIGN_UP);

  const validatePassword = (password: string) => {
    const regex = /[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]+/;

    if(password.length <= 6) {
      return false;
    };

    if(regex.test(password) !== false) {
      return false;
    };

    return true;
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const response = await createUser({
      variables: {
        data: user,
      },
    });
    
    if(response.data?.createUser.success) {
      navigate('/Login');
      setSignupSuccess('Success');
    } else {
      setSignupSuccess('Fail');
      setErrorMessage('Try again with new email');
    };
  }, [password, email]);

  return (
    <Wrapper>
      <Card>
        <Title>Sign Up</Title>
        <SignupForm onSubmit={handleSubmit}>
          <StyledInput 
            type='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email'
            isValid={email === '' || validateEmail(email)} 
          />
          {
            !validateEmail(email) && email !== '' && (
              <ValidationError>Invalid Email</ValidationError>
            )
          }
          <StyledInput 
            type='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password'
            isValid={password === '' || validatePassword(password)} 
          />
          {
            !validatePassword(password) && password !== '' && (
              <ValidationError>Invalid Password</ValidationError>
            )
          }
          {
            signupSuccess === 'Fail' && (
              <ErrorText>{errorMessage}</ErrorText>
            )
          } 
          <SignupButton type='submit'>Sign Up</SignupButton>
        </SignupForm>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ffffff;
  font-family: 'Arial', sans-serif;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 350px;
  padding: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input<{ isValid: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${props => props.isValid ? '#e0e0e0' : 'red'};
  border-radius: 5px;
  font-size: 0.9rem;
  &:focus {
    border-color: ${props => props.isValid ? '#a0a0a0' : 'red'};
    outline: none;
  }
`;

const SignupButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  background: #007bff;
  font-size: 0.9rem;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

const ValidationError = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const ErrorText = styled.span`
  color: red;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
`;
