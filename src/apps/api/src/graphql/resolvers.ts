import { Word } from '../models/data_models';

export const resolvers = {
  Query: {
    words: async (_: any, { page, limit, level }: any) => {
      page = Math.max(1, page);
      limit = Math.min(100, Math.max(10, limit));

      const skip = limit * (page - 1);

      return Word.find({ level }).skip(skip).limit(limit);
    },
  },
};
