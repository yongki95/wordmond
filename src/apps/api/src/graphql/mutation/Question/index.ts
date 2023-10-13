import { Question, QuestionModel } from '../../../models';
import { Resolver } from '../../type';

const saveTestQuestion: Resolver<{
  data: Pick<Question, 'word' | 'answer' | 'choices' | 'userAnswer'>;
}, {
  success: boolean;
  error?: string;
  _id?: string;
}> = async (_, { data }) => {
  try {
    const question = await QuestionModel.create(data);
    
    return {
      success: true,
      _id: question._id,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

export {
  saveTestQuestion,
};
