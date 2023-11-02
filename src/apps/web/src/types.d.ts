type Word = {
  _id: string;
  level: number;
  eng: string;
  kor: string;
};

type BarAttributes = {
  level: string;
  value: number;
  bColor: string;
};

type FlipCardAttributes = {
  width: number;
  height: number;
};

type LevelCardAttributes = {
  level: number;
  style?: React.CSSProperties;
};

type CreatePracticeAttributes = {
  level: number;
  type: string;
};

enum Language {
  Eng = 'eng',
  Kor = 'kor',
};

type data = {
  _id: string;
  eng: string;
  kor: string;
  __typename: string;
};

type QuestionObjType = {
  word: string;
  answer: string;
  choices: string[];
  userAnswer: null | string;
};

type WordTopProps = {
  level: number;
  index: number;
  goLeft: () => void;
  goRight: () => void;
};

type PagenateWordsByLevelProps = {
  page: number;
  level: number;
};

type CreateTestProps = {
  level: number; 
  type: string; 
};

type WordFlashCardProps = {
  level: number;
  index: number;
};

type TestHistory = {
  date: string;
  score: number;
  level: number;
  language: string;
  questions: string[];
};

type googleResponse = {
  clientId?: string;
  credential?: string;
  select_by?: string;
};

type GoogleUserCredential = {
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

declare global {
  interface Window {
    google: any;
  }
}

type GoogleResponse = {
  clientId: string;
  client_id: string;
  credential: string;
  select_by: string;
};
