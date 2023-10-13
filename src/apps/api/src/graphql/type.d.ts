import { ExpressContext } from 'apollo-server-express';

import { User } from '../models/User';

export type GraphqlContext = {
  user: User | null;
  req: ExpressContext['req'];
};

export type Resolver<Arguments, Returns, Parent = any> = {
  (
    parent: Parent,
    args: Arguments,
    ctx: GraphqlContext,
    info: GraphQLResolveInfo
  ): Promise<Returns>;
};
