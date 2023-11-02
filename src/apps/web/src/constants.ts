export const LOCAL_STORAGE_KEY_TOKEN = 'token';
export const LOCAL_STORAGE_KEY_USER_ID = 'userId';

export const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || 'http://localhost:8000/graphql';

export const COLUMN_WIDTH = 100;

export const getSecretKey = () => process.env.REACT_APP_API_KEY || 'default_secret_key';
export const getGoogleAuthId = () => process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID!;
