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

type ProblemObjType = {
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