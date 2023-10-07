import { gql, useMutation } from '@apollo/client';
import Bluebird from 'bluebird';
import { FC, useCallback, useMemo, useState } from 'react';

export const DeleteBulkWord: FC = () => {
  const [message, setMessage] =  useState<string>('');
  const [_id, setId] = useState<string>('');

  const log = useCallback((...args: any[]) => {
    setMessage((prev) => {
      return `${args.join(' ')}\n${prev}`;
    });
  }, []);

  const [deleteWordById] = useMutation<{ deleteWordById: { success: boolean; error?: string; }}>(gql`
    mutation DeleteWordById($_id: ID!) {
      deleteWordById(_id: $_id) {
        success
        error
      }
    }
  `);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setId(e.target.value);
  }, []);

  const validate = (line: string) => {
    const _id = line;

    // 각 값이 비었나 확인
    if (!_id) {
      return false;
    }

    //length == 24
    if (_id.length !== 24) {
      return false;
    }

    // 성공
    return true;
  };


  const isValid = useMemo(() => {
    return _id.split('\n').every(validate);
  }, [_id]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const items = _id.split('\n').map((line) => {
      const _id = line;
      
      return {
        _id,
        };
    });

    await Bluebird.each(items, async (_id) => {
      log('delete item...', _id);

      await deleteWordById({
        variables: {
          _id,
        }
      });
      
      log('delete... done');
    });
  }, [_id]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={_id} onChange={handleChange} style={{ width: 300, height: 400 }} />
      <br />
      
      <button type='submit' disabled={!isValid}>삭제</button>
      <br />
      <br />
      <br />

      <textarea value={message}  style={{ width: 500, height: 500 }}/>
    </form>
  )
};