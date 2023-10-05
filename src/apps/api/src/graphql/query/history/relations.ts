import { Question, QuestionModel, TestHistory as ITestHistory} from '../../../models';
import { Resolver } from '../../type';

const getQuestionsByTestHisory: Resolver<{}, Question[], ITestHistory> = async ({questions},) => {
  const data = await QuestionModel.find({_id: {$in: questions}});
  
  return data;
};

export const testHistoryRelations = {
  questions: getQuestionsByTestHisory,
};