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

export {
  createWord,
};
