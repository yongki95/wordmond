import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FC, useCallback} from 'react';
import styled from 'styled-components';

import { FlipCard } from './FlipCard';

export const TopMain: FC = () => {
  return (
    <Wrapper>
      <TopTitle>
        Today's Words
      </TopTitle>
      <Top>
        <LeftMoveButton/>
        <FlipCard height={250} width={450}/>
        <RightMoveButton/>
      </Top>
    </Wrapper>
  );
};

const LeftMoveButton: FC = () => {
  const handleDelete = useCallback(() => {
    alert('Move to Left Card');
  }, []);
  
  return (
    <div>
      <Button typeof = 'button' onClick={handleDelete}>
        <FontAwesomeIcon 
          icon={faAnglesLeft} 
          size='3x' 
          style={{ color: 'gray' }} 
        />
      </Button>
    </div>
  );
};

const RightMoveButton: FC = () => {
  const handleDelete = useCallback(() => {
    alert('Move to Right Card');
  }, []);
  
  return (
    <div>
      <Button typeof = 'button' onClick={handleDelete}>
        <FontAwesomeIcon 
          icon={faAnglesRight} 
          size='3x' 
          style={{ color: 'gray' }} 
        />
      </Button>
    </div>
  );
};


const Wrapper = styled.div`
  display:flex;
  flex: 1;  
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-top: 30px;
  padding: 36px;  
  background-color: white;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
  margin-top: 60px;
`;

const TopTitle = styled.div`
  font-weight: bold;
  font-size: 24px;  
`;

const Button = styled.div`
    margin: 40px;
`;