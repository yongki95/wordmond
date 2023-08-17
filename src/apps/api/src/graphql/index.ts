import { Word, WordModel } from '../models';
import * as Mutation from './mutation';
import * as Query from './query';
import { Resolver } from './type';

export * from './type_defs';

export const resolvers = {
  Query,
  Mutation,
};
