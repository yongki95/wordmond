import { v4 as uuidv4 } from 'uuid';

import { User, UserModel } from '../../../models';
import { Resolver } from '../../type';

const createUser: Resolver<{
  data: Pick<User, 'userName' | 'password' | 'email'>;
}, {
  success: boolean;
  _id?: string;
}> = async (_, { data }) => {
  try {
    const user = await UserModel.create(data);

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
  data: Pick<User, 'userName' | 'password'>;
}, {
  success: boolean;
  _id?: string;
}> = async (_, { data }) => {
  try {
    const user = await UserModel.findOne({ userName: data.userName });
    
    if (user && user.password === data.password) {
      user.authorizedID = uuidv4();
      await user.save();
      
      return {
        success: true,
        authorizedID: user.authorizedID,
      };
    } else {
      return {
        success: false,
        error: 'Invalid username or password',
      };
    }
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
};

