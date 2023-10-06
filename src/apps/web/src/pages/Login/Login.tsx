import { useMutation, gql } from '@apollo/client';
import { FC, useCallback, useState } from 'react';
import { styled } from 'styled-components';

import { useAuth, useSetToken } from '../../auth';

const LOG_IN = gql`
  mutation LoginUser($data: LoginInput!) {
    loginUser(data: $data) {
      success
      error
      token
    }
  }
`;

export const Login: FC = () => {
  const [login] = useMutation<{
    loginUser: {
      success: boolean;
      error?: string;
      token?: string;
    }
  }>(LOG_IN);
  const setToken = useSetToken();
  const { hasSession } = useAuth(false);

  const [email, setemail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await login({
      variables: {
        data: {
          email, 
          password,
        },
      },
    });

    if (data?.loginUser.success) {
      const token = data.loginUser.token!; 

      setToken(token);
    } else {
      alert('Authentication failed')
    }
  }, [setToken, email, password]);

  if (hasSession === undefined) {
    return <>Loading...</>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder='email' 
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button type='submit'>Login</button>
    </form>
  );
};

const Wrapper = styled.div`
`;