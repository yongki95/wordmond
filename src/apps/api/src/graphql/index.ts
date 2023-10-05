import * as Mutation from './mutation';
import * as Query from './query';
import { testHistoryRelations } from './query/history/relations';

export * from './type_defs';

export const resolvers = {
  Query,
  Mutation,
  TestHistory: testHistoryRelations,
};
