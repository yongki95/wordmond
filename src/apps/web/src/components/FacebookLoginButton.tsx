import { gql, useMutation } from '@apollo/client';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { styled } from 'styled-components';
import { useSetToken } from '../auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { size } from 'lodash';


const AUTHENTICATE_FACEBOOK = gql`
  mutation AuthenticateFacebook($responsedEmail: String!, $provider: String!, $providerSub: String!) {
    authenticateFacebook(responsedEmail: $responsedEmail, provider: $provider, providerSub: $providerSub) {
      success
      error
      token
    }
  }
`;

export const FacebookLoginButton = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const setToken = useSetToken();

  const [authenticateFacebook] = useMutation<{
    authenticateFacebook: {
      success: boolean,
      error?: string,
      token?: string,
    },
  }>(AUTHENTICATE_FACEBOOK);
  
  const responseFacebook = async (response: any) => {
    const responsedEmail = response.email;
    const provider = response.graphDomain;
    const providerSub = response.id;

    const { 
      data
    } = await authenticateFacebook({
      variables: {
        responsedEmail,
        provider,
        providerSub,
      },
    });

    if (data?.authenticateFacebook.token) {
      const token = data.authenticateFacebook.token; 
      
      setToken(token);
    } else {
      setErrorMessage('Invalid email or password');
    };
  };
  
    return (
      <FacebookLogin
        appId='370296632014019'
        fields='name,email,picture'
        callback={responseFacebook}
        size='medium' 
        render={CustomButton => (
          <FacebookButton onClick={CustomButton.onClick}>
            <FontAwesomeIcon 
            icon={faSquareFacebook} 
            size='lg' 
            style={{color: 'white'}} 
            />
            <Text>Log in with Facebook</Text>
          </FacebookButton>
        )}
        />
    );
};

const FacebookButton = styled.button`
  border: 1px solid #1877f2;
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: #1877f2;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

const Text = styled.span`
  flex-grow: 1;
  text-align: center;
`;