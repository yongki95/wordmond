import CryptoJS from 'crypto-js';

import { getSecretKey } from '../../constants';

export const generateHMAC = (message: string) => {
  const SECRET_KEY = getSecretKey();
  const hash = CryptoJS.HmacSHA256(message, SECRET_KEY);
  return CryptoJS.enc.Hex.stringify(hash);
};
