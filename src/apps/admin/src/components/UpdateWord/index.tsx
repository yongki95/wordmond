import { gql, useMutation } from "@apollo/client";
import { FC, useCallback, useMemo, useState } from "react";

export const UpdateWordKor: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const log = useCallback((...args: any[]) => {
      setMessage((prev) => {
          return `${args.join(' ')}\n${prev}`;
      });
  }, []);

  const UPDATE_WORD_KOR = gql`
    mutation UpdateWordKor($eng: String! $kor: String!) {
      updateWordKor(eng: $eng kor: $kor) {
        success
        error
      }
    }
  `;

  const [updateWordKor] = useMutation<{ 
    updateWord: { 
      success: boolean; 
      error?: string; 
      data: Word 
    }}>(UPDATE_WORD_KOR);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    }, []);

    const validate = (line: string) => {
      const [eng, kor] = line.split(/\t| /);
      
      if (!eng || !kor) {
        return false;
      }

      return true;
    }

    const isValid = useMemo(() => {
      return validate(value);
    }, [value])
    
    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      const [eng, kor] = value.split(/\t| /);

      log('start updating...', `${eng} - ${kor}`);

      await updateWordKor({
        variables: {
          eng,
          kor,
        }
      });

      log('update... done');
    }, [value]);

    return(
      <form onSubmit={handleSubmit}>
        <textarea value={value} onChange={handleChange} style={{ width: 300, height: 400 }} />
        <br />
        
        <button type="submit" disabled={!isValid}>업데이트</button>
        <br />
        <br />
        <br />

        <textarea value={message}  style={{ width: 500, height: 500 }}/>
      </form>
    )

  }