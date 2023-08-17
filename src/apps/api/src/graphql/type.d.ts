export type GraphqlContext = {
  adminUser: AdminUser | null;
  req: {
    ip: string;
    method?: "GET" | "POST" | "DELETE" | "PUT" | string;
    path?: typeof URL.prototype.pathname;
    protocol?: typeof URL.prototype.protocol;
    userAgent?: string;
  };
};

export type Resolver<Arguments, Returns, Parent = any> = {
  (
    parent: Parent,
    args: Arguments,
    ctx: GraphqlContext,
    info: GraphQLResolveInfo
  ): Promise<Returns>;
};
