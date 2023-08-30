import { gql, useMutation } from "@apollo/client";
import Bluebird from "bluebird";
import { FC, useCallback, useMemo, useState } from "react";

// [한주간 할일]
// 1. 만들어보기 수정, 삭제, 검색 기능 추가
// 2. antd 적용해보기
// 3. styled-components 적용해보기

// [후순위 공부거리]
// 찾아보기 react context 배워오기
// 찾아보기 pnpm 패키지 bluebird, @types/bluebird
// 찾아보기 nodejs destructuring

export const CreateBulkWord: FC = () => {
  const [message, setMessage] =  useState<string>('');
  const [value, setValue] = useState<string>('');

  const log = useCallback((...args: any[]) => {
    setMessage((prev) => {
      return `${args.join(' ')}\n${prev}`;
    });
  }, []);

  const [createWord] = useMutation<{ createWord: { success: boolean; error?: string; _id?: string}}>(gql`
    mutation CreateWord($data: WordInput!) {
      createWord(data: $data) {
        success
        error
        _id
      }
    }
  `);
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  const validate = (line: string) => {
    const [level, eng, kor] = line.split(/\t| /);

    // 각 값이 비었나 확인
    if (!level || !eng || !kor) {
      return false;
    }

    // level이 숫자인지 확인
    if (!Number.isInteger(Number(level))) {
      return false;
    }

    // 성공
    return true;
  };

  const isValid = useMemo(() => {
    return value.split('\n').every(validate);
  }, [value]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const items = value.split('\n').map((line) => {
      const [level, eng, kor] = line.split(/\t| /);
      
      return {
        level: Number(level),
        eng,
        kor,
      };
    });

    await Bluebird.each(items, async (data) => {
      log('add...', JSON.stringify(data));

      const response = await createWord({
        variables: {
          data,
        }});

      log('add... done', response.data?.createWord._id);
    });
  }, [value]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={value} onChange={handleChange} style={{ width: 300, height: 400 }} />
      <br />
      
      <button type="submit" disabled={!isValid}>등록</button>
      <br />
      <br />
      <br />

      <textarea value={message}  style={{ width: 500, height: 500 }}/>
    </form>
  )
};