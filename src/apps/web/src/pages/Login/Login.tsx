import { useMutation, gql, useQuery } from '@apollo/client';
import CryptoJS from 'crypto-js';
import { FC, useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { useAuth, useSetToken } from '../../auth';
import { getSecretKey } from '../../constants';
import { FacebookLoginButton } from '../../components/FacebookLoginButton';
import { GoogleLoginButton } from '../../components/GoogleLoginButton';

const LOG_IN = gql`
  mutation LoginUser($data: LoginInput!, $hmac: String!) {
    loginUser(data: $data, hmac: $hmac) {
      success
      error
      token
    }
  }
`;

export const Login: FC = () => {
  const setToken = useSetToken();
  const { hasSession } = useAuth(false);
  const [email, setemail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const SECRET_KEY = getSecretKey()

  const [login] = useMutation<{
    loginUser: {
      success: boolean;
      error?: string;
      token?: string;
    },
  }>(LOG_IN);

  const generateHMAC = (message: string) => {
    const hash = CryptoJS.HmacSHA256(message, SECRET_KEY);
    return CryptoJS.enc.Hex.stringify(hash);
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hmac = generateHMAC(email + password);

    const { 
      data
    } = await login({
      variables: {
        data: {
          email, 
          password,
        },
        hmac,
      },
    });

    if (data?.loginUser.success) {
      const token = data.loginUser.token!; 

      setToken(token);
    } else {
      setErrorMessage('Invalid email or password');
    };
  }, [setToken, email, password]);
  
  if (hasSession === undefined) {
    return <>Loading...</>;
  };

  return (
    <Wrapper>
      <Card>
        <Title>Login</Title>
        <LoginForm onSubmit={handleSubmit}>
          <StyledInput
            type='text'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder='Email' 
          />
          <StyledInput
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          {
            errorMessage && (
              <ErrorText>{errorMessage}</ErrorText>
            )
          }
          <LoginButton type='submit'>Login</LoginButton>
          <GoogleLoginButton />
          <FacebookLoginButton />
        </LoginForm>
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 0.9rem;
  &:focus {
    border-color: #a0a0a0;
    outline: none;
  }
`;

const LoginButton = styled.button`
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

const ErrorText = styled.span`
  color: red;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
`;
