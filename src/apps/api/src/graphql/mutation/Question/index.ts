import { Question, QuestionModel } from '../../../models';
import { Resolver } from '../../type';

const saveQuestion: Resolver<{
  data: Pick<Question, 'word' | 'answer' | 'choices' | 'userAnswer'>;
}, {
  success: boolean;
  _id?: string;
}> = async (_: any, { data }) => {
  try {
    const user = await QuestionModel.create(data);
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

export {
  saveQuestion,
}