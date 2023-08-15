type Word = {
  _id: string;
  level: number;
  eng: string;
  kor: string;
  };

type DisplayWordsProps = {
  page: number;
  limit: number;
  level: number;
};
  