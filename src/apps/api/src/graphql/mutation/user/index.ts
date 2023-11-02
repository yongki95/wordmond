import { OAuth2Client } from 'google-auth-library';
import { v4 as uuidv4 } from 'uuid';

import { generateHMAC } from '../../../utils';
import { User, UserModel, AuthModel, Auth } from '../../../models';
import { Resolver } from '../../type';

const createUser: Resolver<{
  data: Pick<User, 'email' | 'password'>;
  hmac: string;
}, {
  success: boolean;
  error?: string;
  _id?: string;
}> = async (_, { data, hmac }) => {
  try {
    const expectHMAC = generateHMAC(data.email + data.password);
    const user = await UserModel.create(data);

    if (expectHMAC !== hmac) {
      return {
        success: false,
        error: 'hmac is not valid'
      };
    };
    
    await user.hashPassword();
    await user.save();

    return {
      success: true,
      _id: user._id,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

const loginUser: Resolver<{
  data: Pick<User, 'email' | 'password'>;
  hmac: string;
}, {
  success: boolean;
  error?: string;
  token?: string;
}> = async (_, { data, hmac }) => {
  try {
    const expectHMAC = generateHMAC(data.email + data.password);
    const user = await UserModel.findOne({ email: data.email });
  
    if (expectHMAC !== hmac) {
      return {
        success: false,
        error: 'hmac is not valid'
      };
    };
    
    if (user && await user.comparePassword(data.password)) {
      user.token = uuidv4();
      await user.save();
      
      return {
        success: true,
        token: user.token,
      };
    } else {
      return {
        success: false,
        error: 'Invalid email or password',
      };
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

const authenticateGoogle: Resolver<{
  googleResponse: string;
}, {
  success: boolean;
  error?: string;
  token?: string;
}> = async (_, { googleResponse }) => {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  
  try {
    const ticket = await client.verifyIdToken({
      idToken: googleResponse,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload) {
      throw new Error('Failed to get user payload from google');
    };
    
    const { email, sub } = payload;

    if (!email) {
      throw new Error('Failed to get user email of payload from google');
    };

    let user;
    const auth = await AuthModel.findOne({ providerSub: sub, provider: 'google' }).populate('user');

    if (!auth) {
      user = await UserModel.create({ email });
      await AuthModel.create({ user, providerSub: sub, provider: 'google' });
    } else {
      user = auth.user;
    };
    
    user.token = uuidv4();
    user.save();
    
    return {
      success: true,
      token: user.token,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  };
};

const authenticateFacebook: Resolver<{
  responsedEmail: string;
  provider: string;
  providerSub: string;
}, {
  success: boolean;
  error?: string;
  token?: string;
}> = async(_, { responsedEmail, provider, providerSub }) => {
  try {
    if (!responsedEmail) {
      throw new Error('Failed to login with facebook/meta');
    }

    let user;
    const auth = await AuthModel.findOne({ providerSub, provider }).populate('user');
    
    if (!auth) {
      user = await UserModel.create({ email: responsedEmail });
      await AuthModel.create({ user, provider, providerSub });
    } else {
      user = auth.user;
    };

    user.token = uuidv4();
    user.save();

    return {
      success: true,
      token: user.token,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

export {
  createUser,
  loginUser,
  authenticateGoogle,
  authenticateFacebook,
};
