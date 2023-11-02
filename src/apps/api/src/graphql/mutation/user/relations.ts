import { AuthModel, User, UserModel } from '../../../models';
import { PaginateArgument, PaginateResult } from '../../../types';
import { Resolver } from '../../type';

const findOrCreateUserAuth: Resolver<{
  query: any;
  authID: string;
  authProdiver: string;
}, {
  success: boolean;
  error?: string;
  _id?: string;
}, User> = async ({ email }, { query: _query, authID, authProdiver }) => {
  
  const query = {
    ..._query,
    email,
  };
  
  try {
    const user = await UserModel.findOne(query);
    let auth = await AuthModel.findOne({ providerSub: authID, provider: authProdiver });

    if(!auth) {
      const auth = await AuthModel.create({ providerSub: authID, provider: authProdiver });
    }

    return {
      success: true,
      _id: auth?.id,
    }
  } catch(e: any) {
    return {
      success: false,
      erorr: e.message,
    }
  }
};

export const userRelations = {
  findOrCreateUserAuth,
};
