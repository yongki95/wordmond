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

export {
  paginateWord,
  getWord,
};
