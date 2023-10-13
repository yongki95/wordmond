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
    const TestHistory = await TestHistoryModel.create(data);
    
    return {
      success: true,  
      _id: TestHistory._id,
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
