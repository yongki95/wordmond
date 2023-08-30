import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartLine, faClock, faComment, faHourglass, faPersonDigging, faUser } from "@fortawesome/free-solid-svg-icons";


export const UserMenuMain = () => {
  return (
    <Wrapper>
      <List>
        <ListItem $active>
          <FontAwesomeIcon icon={faChartLine} size="1x" style={{ paddingRight: "15px"}}/>
          General
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faClock} size="1x" style={{ color: '#82e9ff', paddingRight: "15px"}}/>
          Security and Login
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faBars} size="1x" style={{ paddingRight: "15px"}}/>
          Other Menu1
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faComment} size="1x" style={{ color: "#82e9ff", paddingRight: "15px"}}/>
          Other Menu2
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faPersonDigging} size="1x" style={{ paddingRight: "15px"}}/>
          Other Menu3
        </ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div<{ $active?: boolean }>`
  height: 40px;
  padding-top: 20px;
  font-size: 20px;
  opacity: 0.9;
  min-width: 250px;

  &:hover {
    font-size: 24px;
    font-weight: 500;
    opacity: 1;
  }

  &:active {
    opacity: 0.5;
  }
`;

const List = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  color: white;

  &:nth-child(even) {
    color: #82e9ff;
  } 


`;

