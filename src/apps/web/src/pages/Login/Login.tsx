import react, { useCallback, useEffect, useState } from 'react';
import { ApolloLink, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useAuth, useSetToken } from '../../auth';

const LOG_IN = gql`
  mutation LoginUser($data: LoginInput!) {
    loginUser(data: $data) {
      success
      error
      authorizedID
    }
  }
`;

export const Login = () => {
  const [login] = useMutation<{
    loginUser: {
      success: boolean;
      error?: string;
      authorizedID?: string;
    }
  }>(LOG_IN);
  const navigate = useNavigate();
  const setToken = useSetToken();
  const { hasSession } = useAuth(false);

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await login({
      variables: {
        data: {
          userName, // TODO: userName -> email
          password,
        },
      },
    });

    if (data?.loginUser.success) {
      const token = data.loginUser.authorizedID!; // authorizedID -> token 

      setToken(token);
    } else {
      alert("Authentication failed")
    }
  }, [setToken, userName, password]);

  if (hasSession === undefined) {
    return <>Loading...</>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username" 
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

const Wrapper = styled.div`
`;