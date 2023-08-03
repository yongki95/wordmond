import { Word } from "../models/data_models";

//graphQL Resolvers
export const resolvers = {
    Query: {
        words: async (_: any, { page, limit, level }: any) => {
            const maxNum: number = 10;

            if(limit > 50){
                limit = Math.min(50, limit);
            };

            const skip: number = limit * page;
        


            return await Word.find({ level }).skip(skip).limit(maxNum);
        }
    }
}

