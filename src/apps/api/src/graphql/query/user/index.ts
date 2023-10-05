import { UserModel } from '../../../models';
import { Resolver } from '../../type';

const getUserIdByToken: Resolver<{
  userToken: string;
}, {
  success: boolean;
  error?: string;
  _id?: string;
}> = async (_, { userToken }) => {
  try {
    const userData = await UserModel.findOne({ authorizedID: userToken });
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
    const userData = await UserModel.findOne({ authorizedID: userToken });
    return {
      success: true,
      userName: userData?.userName,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

export {
  getUserIdByToken,
  getUserAccountByToken,
};