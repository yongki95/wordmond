import { WordItem } from './WordItem';
import { useWordQuery } from './useWordQuery';

export const DisplayWords: React.FC<DisplayWordsProps> = ({ page, limit, level }) => {
  const { loading, error, data } = useWordQuery({ page, limit, level });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className = {`level${level}`}>
      {data.words.map((item: any) => <WordItem key={item.id} {...item}/>)}
    </div>
  );
};
