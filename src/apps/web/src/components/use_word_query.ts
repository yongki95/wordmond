import { useQuery } from '@apollo/client';

import { GET_WORD } from './get_word';

export const useWordQuery = ({ page, limit, level }: DisplayWordsProps) => {
  const { loading, error, data } = useQuery(GET_WORD, {
      variables: { page: page, limit: limit, level: level }
  });
      
  return { loading, error, data };    
};
