export type PaginateArgument = {  
  query: any;
  page: number;
  limit: number;
  sort: any;
};

export type PaginateResult = {
  success: boolean;
  error?: string;
  total?: number;
  data?: TestHistory[];
};
