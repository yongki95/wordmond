import { ID } from "graphql-ws";
import { Word, WordModel } from "../../../models";
import { Resolver } from "../../type";

const paginateWord: Resolver<{
  query: any;
  page: number;
  limit: number;
  sort: any;
}, {
  success: boolean;
  error?: string;
  total?: number;
  data?: Word[];
}> = async (_, { query, page, limit, sort }) => {
  page = Math.max(1, page);
  limit = Math.min(100, Math.max(10, limit));

  const skip = limit * (page - 1);

  try {
    const total = await WordModel.countDocuments(query);
    const data = await WordModel.find(query).skip(skip).limit(limit).sort(sort);

    return {
      success: true,
      total,
      data,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

const paginateWordByLevel: Resolver<{
  query: any;
  page: number;
  limit: number;
  sort: any;
  level: number;
}, {
  success: boolean;
  error?: string;
  total?: number;
  data?: Word[];
}> = async (_, { query, page, limit, sort, level }) => {
  page = Math.max(1, page);
  limit = Math.min(100, Math.max(10, limit));

  const skip = limit * (page - 1);

  try {
    const total = await WordModel.countDocuments(query);
    const data = await WordModel.find({level: level}).skip(skip).limit(limit).sort(sort);

    return {
      success: true,
      total,
      data,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

const getWordByLevel: Resolver<{
  level: number;
  skip: number;
}, {
  success: boolean;
  error?: string;
  data?: Word[];
}> = async (_, { level, skip }) => {

  try {
    const total = await WordModel.countDocuments({level});
    const data = await WordModel.find({level}).skip(skip).limit(1);

    return { 
      success: true,
      data,
      total,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

const getEveryWordsByLevel: Resolver<{
  level: number;
}, {
  success: boolean;
  error?: string;
  data?: Word[]
}> = async (_, { level }) => {
  try {
    const data = await WordModel.find({level});
    const total = await WordModel.countDocuments({level});
    
    return {
      success: true,
      data,
      total
    }
  } catch (e:any) {
    return {
      success: false,
      error: e.error,
    };
  }
};

const getWord: Resolver<{
  _id: string;
}, {
  success: boolean;
  error?: string;
  data?: Word | null;
}> = async (_, { _id }) => {
  try {
    const data = await WordModel.findById(_id);

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

const getRandomWord: Resolver<{
  level: number;
}, {
  success: boolean;
  error?: string;
  data?: Word[];
}> = async (_, { level }) => {
  try {
    const data = await WordModel.aggregate([{ $match: { level } }, { $sample: {size: 1} }]);
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

const getWordQuizOptions: Resolver<{
  answerWordId: ID;
  level: number;
}, {
  success: boolean;
  error?: string;
  data?: Word[];
}> = async (_, { answerWordId }) => {
  try {
    const data = await WordModel.aggregate([{ $match: { level: 1, _id: {$ne: answerWordId}}}, {$sample: {size: 3} }])
    return {
      success: true,
      data
    };
  }
  catch (e: any) {
    return {
      success: false,
      error: e.message
    };
  }
};

const searchWord: Resolver<{
  term: string;
}, {
  success: boolean;
  error?: string;
  data?: Word | null;
}> = async (_, { term }) => {
  try {
    const data = await WordModel.findOne({
      $or: [
        { eng: term },
        { kor: term },
      ]
  });

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
  paginateWord,
  getWord,
  searchWord,
  getWordByLevel,
  getRandomWord,
  getWordQuizOptions,
  getEveryWordsByLevel,
  paginateWordByLevel,
};
