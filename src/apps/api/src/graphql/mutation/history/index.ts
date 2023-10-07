import { TestHistory, TestHistoryModel } from '../../../models';
import { Resolver } from '../../type';

const saveTestHistory: Resolver<{
  data: Pick<TestHistory, 'user' | 'date' | 'score' | 'level' | 'language' | 'questions'>;
}, {
  success: boolean;
  error?: string;
  _id?: string;
}> = async (_, { data }) => {
  try {
    const testHisotry = await TestHistoryModel.create(data);
    
    return {
      success: true,  
      _id: testHisotry._id,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

export {
  saveTestHistory,
};
