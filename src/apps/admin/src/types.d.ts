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

type Level = 'undifined' | 'level1' | 'level2' | 'level3' | 'level4' | 'level5';

type DropDownProps = {
  selectedLevel: level;
  onSelectLevel: (level: Level) => void;
};