import { gql, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';

import { useSetToken } from '../auth';

declare global {
  interface Window {
    google: any;
  }
};

const AUTHENTICATE_GOOGLE = gql`
  mutation AuthenticateGoogle($credential: String!) {
    authenticateGoogle(googleResponse: $credential) {
      success
      error
      token
    }
  }
`;

export const GoogleLoginButton = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setToken = useSetToken();

  const [authenticateGoogle] = useMutation<{
    authenticateGoogle: {
      success: boolean;
      error?: string;
      token?: string;
    },
  }>(AUTHENTICATE_GOOGLE);
  
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: '661476397762-b8eul6qpotejcop57hsdlkajfrlcp5jk.apps.googleusercontent.com',
      ux_mode: 'popup',
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('google-login-button'),
      { 
        type: 'standard', 
        theme: 'filled_white', 
        size: 'large', 
        text: 'Sign in with Google', 
        width: '350'
      },
    );

    window.google.accounts.id.prompt();
  }, []);

  const handleCredentialResponse = async (response: any) => {
    const credential = response.credential;

    const { 
      data,
    } = await authenticateGoogle({
      variables: {
        credential,
      },
    });

    if (data?.authenticateGoogle.token) {
      const token = data.authenticateGoogle.token; 
      setToken(token);
    } else {
      setErrorMessage('Invalid email or password');
    };
  };

  return (
    <div id="google-login-button"></div>
  );
};
