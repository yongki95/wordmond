import { User, UserModel } from '../../../models';
import { Resolver } from '../../type';

const me: Resolver<{}, User | null> = async (_, __, { user }) => {
  if (!user) {
    return null;
  };

  return user;
};

const getUserIdByToken: Resolver<{
  userToken: string;
}, {
  success: boolean;
  error?: string;
  _id?: string;
}> = async (_, { userToken }) => {
  try {
    const userData = await UserModel.findOne({ token: userToken });

    return {
      success: true,
      _id: userData?._id,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

const getUserAccountByToken: Resolver<{
  userToken: string;
}, {
  success: boolean;
  error?: string;
  userName?: string;
}> = async (_, { userToken }) => {
  try {
    const userData = await UserModel.findOne({ token: userToken });

    return {
      success: true,
      userName: userData?.email,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

export {
  me,
  getUserIdByToken,
  getUserAccountByToken,
};
