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

export type GoogleUserCredential = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  locale: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
};

export type WordEntry = {
  level: number;
  eng: string;
  kor: string;
};

export type SampleWordsByLevel = {
  [key: number]: WordEntry[];
};
