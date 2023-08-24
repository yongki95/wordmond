import { gql, useMutation, useQuery } from "@apollo/client";
import { FC, useCallback, useMemo, useState } from "react";

export const SearchkWord: FC = () => {
  const [message, setMessage] =  useState<string>('');
  const [term, setTerm] = useState<string>('');

  const SEARCH_WORD = gql`
    query SearchWord($term: String!) {
      searchWord(term: $term) {
        success
        error
        data {
          _id
          level,
          eng,
          kor
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<{ 
    searchWord: { 
        success: boolean; 
        error?: string; 
        data: Word}}>(SEARCH_WORD, { variables: { term }});

  const log = useCallback((...args: any[]) => {
    setMessage((prev) => {
      return `${args.join(' ')}\n${prev}`;
    });
  }, []);
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTerm(e.target.value);
  }, []);

  const validate = (line: string) => {
    const term = line;
    
    // 각 값이 비었나 확인
    if (!term) {
      return false;
    }

    // 성공
    return true;
  };


  const isValid = useMemo(() => {
    return validate(term);
  }, [term]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    log(`finding ${term}`);

    if(loading) {
      log('Still loading...');
      return;
    }

    if (error) {
      log(error.message);
      return;
    }

    if(data?.searchWord.success) {
      log('finding... done', data?.searchWord.data.eng, data?.searchWord.data.kor);
    }

  }, [term, loading, error, data]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={term} onChange={handleChange} style={{ width: 300, height: 400 }} />
      <br />
      
      <button type="submit" disabled={!isValid}>검색</button>
      <br />
      <br />
      <br />

      <textarea value={message}  style={{ width: 500, height: 500 }}/>
    </form>
  )
};