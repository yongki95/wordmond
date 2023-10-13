import * as Mutation from './mutation';
import * as Query from './query';
import { testHistoryRelations } from './query/history/relations';
import { userRelations } from './query/user/relations';

export * from './type_defs';

export const resolvers = {
  Query,
  Mutation,
  TestHistory: testHistoryRelations,
  User: userRelations,
};
