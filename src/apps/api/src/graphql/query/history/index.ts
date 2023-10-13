import { TestHistory, TestHistoryModel } from '../../../models';
import { Resolver } from '../../type';

const getTestHistoriesByUser: Resolver<{
  userId: string;
}, {
  success: boolean;
  error?: string;
  data?: TestHistory[];
}> = async (_, { userId }) => {
  try {
    const data = await TestHistoryModel.find({ user: userId });
    
    return {
      success: true,
      data,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

export {
  getTestHistoriesByUser,
};
