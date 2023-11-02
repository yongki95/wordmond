export const PORT = 8000;
export const MONGO_URI = 'mongodb://localhost:27017/wordmond';
export const getSecretKey = () => process.env.SECRET_KEY || 'default_secret_key';
