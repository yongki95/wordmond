import { Word, WordModel } from "../../../models";
import { Resolver } from "../../type";

const createWord: Resolver<{
  data: Pick<Word, 'level' | 'eng' | 'kor'>;
}, {
  success: boolean;
  _id?: string;
}> = async (_: any, { data }) => {
  try {
    const word = await WordModel.create(data);
    return {
      success: true,
      _id: word._id,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

const deleteWordById: Resolver<{
  _id: object;
}, {
  success: boolean;
  error?: string;
}> = async (_, { _id }) => {
  try {
    await WordModel.deleteOne({ _id });

    return {
      success: true,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};

const updateWordKor: Resolver<{
  eng: string;
  kor: string;
}, {
  success: boolean;
  error?: string;
}> = async (_: any, { eng, kor }) => {
  try {
    const word = await WordModel.findOneAndUpdate({eng: eng}, {kor: kor}, {new: true});
    return {
      success: true,
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
};


export {
  createWord,
  deleteWordById,
  updateWordKor,
};
