// /components/WordItem.tsx
export const WordItem: React.FC<Word> = ({ level, eng, kor }) => (
    <li>
      {eng} - {kor}
    </li>
  );