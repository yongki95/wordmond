//word list 가 0개일때 
//샘플 데이터 넣는 코드
//app.ts에서 무조건 한번은 돌아가게(단어가 0개일때만)

import mongoose from 'mongoose';

import { WordModel } from './models/word'; 
import { SampleWordsByLevel } from './types';

const SAMPLE_WORDS_BY_LEVEL: SampleWordsByLevel = {
  1: [
    { level: 1, eng: 'cat', kor: '고양이' },
    { level: 1, eng: 'happy', kor: '행복한' },
    { level: 1, eng: 'see', kor: '보다' },
    { level: 1, eng: 'know', kor: '알다' },
    { level: 1, eng: 'go', kor: '가다' },
    { level: 1, eng: 'look', kor: '보다' },
    { level: 1, eng: 'want', kor: '원하다' },
    { level: 1, eng: 'use', kor: '사용하다' },
    { level: 1, eng: 'find', kor: '찾다' },
    { level: 1, eng: 'give', kor: '주다' }
  ],
  2: [
    { level: 2, eng: 'beneath', kor: '아래에' },
    { level: 2, eng: 'dull', kor: '둔한' },
    { level: 2, eng: 'faith', kor: '신념' },
    { level: 2, eng: 'grain', kor: '곡물' },
    { level: 2, eng: 'heal', kor: '치유하다' },
    { level: 2, eng: 'isolate', kor: '고립시키다' },
    { level: 2, eng: 'modest', kor: '겸손한' },
    { level: 2, eng: 'novel', kor: '소설' },
    { level: 2, eng: 'owe', kor: '빚지다' },
    { level: 2, eng: 'pledge', kor: '서약' }
  ],
  3: [
    { level: 3, eng: 'acknowledge', kor: '인정하다' },
    { level: 3, eng: 'bewilder', kor: '당황하게 하다' },
    { level: 3, eng: 'commerce', kor: '상업' },
    { level: 3, eng: 'devise', kor: '고안하다' },
    { level: 3, eng: 'enforce', kor: '시행하다' },
    { level: 3, eng: 'forge', kor: '위조하다' },
    { level: 3, eng: 'harness', kor: '이용하다' },
    { level: 3, eng: 'intervene', kor: '개입하다' },
    { level: 3, eng: 'linger', kor: '남다' },
    { level: 3, eng: 'mediate', kor: '중재하다' }
  ],
  4: [
    { level: 4, eng: 'articulate', kor: '명확히 표현하다' },
    { level: 4, eng: 'coerce', kor: '강요하다' },
    { level: 4, eng: 'denounce', kor: '비난하다' },
    { level: 4, eng: 'elaborate', kor: '상세하게 설명하다' },
    { level: 4, eng: 'fluctuate', kor: '변동하다' },
    { level: 4, eng: 'impair', kor: '손상시키다' },
    { level: 4, eng: 'nurture', kor: '양육하다' },
    { level: 4, eng: 'oppress', kor: '억압하다' },
    { level: 4, eng: 'pervade', kor: '퍼지다' },
    { level: 4, eng: 'reconcile', kor: '화해시키다' }
  ],
  5: [
    { level: 5, eng: 'authenticate', kor: '진짜임을 증명하다' },
    { level: 5, eng: 'culminate', kor: '정점에 이르다' },
    { level: 5, eng: 'deteriorate', kor: '악화되다' },
    { level: 5, eng: 'endorse', kor: '지지하다' },
    { level: 5, eng: 'foster', kor: '조성하다' },
    { level: 5, eng: 'inaugurate', kor: '개시하다' },
    { level: 5, eng: 'legislate', kor: '법률을 제정하다' },
    { level: 5, eng: 'mobilize', kor: '동원하다' },
    { level: 5, eng: 'nullify', kor: '무효로 하다' },
    { level: 5, eng: 'paramount', kor: '최고의' }
  ],
  6: [
    { level: 6, eng: 'adjudicate', kor: '판결을 내리다' },
    { level: 6, eng: 'commoditize', kor: '상품화하다' },
    { level: 6, eng: 'disseminate', kor: '퍼뜨리다' },
    { level: 6, eng: 'entrench', kor: '확고히 하다' },
    { level: 6, eng: 'exonerate', kor: '무죄를 입증하다' },
    { level: 6, eng: 'franchise', kor: '특허' },
    { level: 6, eng: 'innovate', kor: '혁신하다' },
    { level: 6, eng: 'litigate', kor: '소송을 하다' },
    { level: 6, eng: 'marginalize', kor: '주변화하다' },
    { level: 6, eng: 'ostracize', kor: '추방하다' }
  ]
};

export const init = async () => {
  for (let level = 1; level <= 6; level++) {
    const count = await WordModel.countDocuments({ level: level });

    if (count === 0) {
      const sampleWords = SAMPLE_WORDS_BY_LEVEL[level];
      await WordModel.insertMany(sampleWords);
    }
  }
};
