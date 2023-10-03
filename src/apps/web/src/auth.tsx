import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY_TOKEN } from './constants';
import { useNavigate } from 'react-router-dom';

export type Auth = {
  token: string | null | undefined;
  setToken: (token: string | null) => void;
  hasSession?: boolean;
};

export const AuthContext = createContext<Auth>({
  token: undefined,
  setToken: () => {},
  hasSession: undefined,
});

export const useAuth = (required?: boolean) => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { hasSession } = context;

  useEffect(() => {
    if (required !== undefined) {
      if (required && !hasSession) {
        navigate('/login');
        return;
      } else if (!required && hasSession) {
        navigate('/');
        return;
      }
    }
  }, [required, hasSession]);

  return context;
};

export const useSetToken = () => {
  const { setToken } = useContext(AuthContext);

  const update = useCallback((token: string | null) => {
    if (token === null) {
      localStorage.removeItem(LOCAL_STORAGE_KEY_TOKEN);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, token);
    }

    setToken(token);
  }, [setToken]);

  return update;
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<Auth['token']>(undefined);
  
  useEffect(() => {
    setToken(localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN));
  }, [setToken]);

  const hasSession = token === undefined ? undefined : !!token;

  const value: Auth = useMemo(
    () => ({
      token,
      setToken,
      hasSession,
    }),
    [token, setToken]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};