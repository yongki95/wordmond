import { User, UserModel, Question, QuestionModel, TestHistory as ITestHistory} from '../../../models';
import { Resolver } from '../../type';

const getQuestionsByTestHistory: Resolver<{}, Question[], ITestHistory> = async ({ questions },) => {
  const data = await QuestionModel.find({ _id: { $in: questions }});
  
  return data;
};

const getUserByTestHistory: Resolver<{}, User[], ITestHistory> = async ({ user },) => {
  const data = await UserModel.find({ _id: { $in: user }});

  return data;
};

export const testHistoryRelations = {
  questions: getQuestionsByTestHistory,
};
