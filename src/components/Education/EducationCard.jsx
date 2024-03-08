import React from "react";
import styled from "styled-components";
import Education from ".";


const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const CompanyLogo = styled.img`
  height: 50px;
  background-color:#000;

  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;
const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Card = styled.div`
width:650px;
border-radius: 10px;
padding: 16px 0;
box-shadow:0px 0px 10px rgba(0,0,0,0,1);
padding:12px 16px;
justify-contnet:space-between;
position:relative;
overflow:hidden;
display:flex;
flex-direction:column;
gap:12px;

transition: all 0.3s ease-in-out ;

&:hover {
    transform: transformY(-5px);
    box-shadow:  0px 0px 20px rgba(0,0,0,0,.2);
}    


@media (max-width: 768px) {
    padding: 10px;
    width:300px;
    gap:8px;
} 

border: 0.1px solid #306ee8;
box-shadow: rgba(23,92,230,0.15) 0px 4px 24px ;
`;




const EducationCard = ({ education }) => {
  return (
    
    <Card>
      <Top>
        <CompanyLogo src={education.img} />
        <Body>
          <Role>{education.degree}</Role>
          <Company>{education.school}</Company>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      </Card>
  );
};

export default EducationCard;