import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiwiBird, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

import { InfoSession } from '../../components/InfoSession';
import { UserList } from '../../components/UserList';

export const MainDashboard = () => {
  return(
    <Wrapper>
      <TopWrapper>
        <InfoWrapper>
            <InfoSession props={{count: 10, sessionName: 'New User'}}/>
            <FontAwesomeIcon icon={faKiwiBird} size="6x" style={{ color: "#A2A3A4" }} />{' '}          
        </InfoWrapper>
        <InfoWrapper>
          <InfoSession props={{count: 4, sessionName: 'Current User'}}/>
          <FontAwesomeIcon icon={faUser} size="6x" style={{ color: "#aaa" }} />{' '}          
        </InfoWrapper>
        <InfoWrapper>
          <InfoSession props={{count: 8, sessionName: 'Daily User'}}/>
          <FontAwesomeIcon icon={faStar} size="6x" style={{ color: "#aaa" }} />{' '}          
        </InfoWrapper>
      </TopWrapper>
      <BottomWrapper>
        <UserList/>

        <Spacer />
      </BottomWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  height: 90%;
`;

const TopWrapper = styled.div`
  display: flex;
  height: 20%;
  padding: 20px 0;
  justify-content: space-evenly;
  `;

const InfoWrapper = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  width: 30%;
  border-radius: 5px;
  background: #c8d9F0;
  min-width: 400px;
  position: relative;
  margin-left: 12px;
  
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 80%;
`
const Spacer = styled.div`
  
`;

// Wrapper
//   SimpleInfoWrapper
//     NewUser
//     Daily Visitor
//     Current Login
//   ChartWrapper
//     SomeChart1
//     SomeChart2

