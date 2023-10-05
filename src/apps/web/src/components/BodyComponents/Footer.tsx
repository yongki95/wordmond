import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMobile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';


export const Footer = () => { 
  return (
    <Wrapper>
      <Left>
        <Logo>
          Wordmond
        </Logo>
        <Text>
          <p>LET'S TALK 
            <FontAwesomeIcon icon={faPaperPlane} size="lg" style={{ color: "black" }} />
          </p>
        </Text>
      </Left>
      <Right>
        <ul>
          <p>
            <FontAwesomeIcon icon={faLocationDot} size="lg" style={{ color: "black" }} />
             Redmond, WA, 98052
          </p>
        </ul>
        <ul>
          <p>
            <FontAwesomeIcon icon={faMobile} size="lg" style={{ color: "black" }} />
            206-***-****
            </p>
        </ul>
        <ul>
          <p>
            <FontAwesomeIcon icon={faSquareFacebook} size="lg" style={{ color: "black" }} />
            Kim, Yongki
          </p>
        </ul>
        <ul>
          <p>
            <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "black" }} />
            yongkikim95
          </p>
        </ul>
        <ul>
          <p>
            <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "black" }} />
            yongki0704
          </p>
        </ul>
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
  
  @media (max-width: 768px) {
    margin-top: 60px;
    min-width: 460px;
  }
`;

const Left = styled.div`

`;

const Logo = styled.div`
  font-size: 32px;  
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

const Text = styled.div`
  margin-top: 180px;
  font-size: 72px;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-top: 120px;
    font-size: 36px;
    font-weight: 400;
  
  }
`;

const Right = styled.div`
  margin-left: 100px;
  
  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 12px;
    font-weight: 400;
  }
`;
