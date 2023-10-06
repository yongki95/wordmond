import { faEnvelope, faLocationDot, faMobile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = () => { 
  const contactItems = [
    { icon: faLocationDot, text: 'Redmond, WA, 98052' },
    { icon: faMobile, text: '206-***-****' },
    { icon: faSquareFacebook, text: 'Kim, Yongki' },
    { icon: faInstagram, text: 'yongkikim95' },
    { icon: faEnvelope, text: 'yongki0704' },
  ];

  return (
    <Wrapper>
      <Left>
        <Logo>Wordmond</Logo>
        <Text>
          <p>
            LET'S TALK 
            <StyledIcon icon={faPaperPlane} size='lg' />
          </p>
        </Text>
      </Left>
      <Right>
        {contactItems.map((item, index) => (
          <ContactItem key={index}>
            <StyledIcon icon={item.icon} size='lg' />
            {item.text}
          </ContactItem>
        ))}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
  
  @media (max-width: 768px) {
    margin-top: 60px;
    min-width: 460px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
`;

const ContactItem = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  
  p {
    margin: 0;
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
