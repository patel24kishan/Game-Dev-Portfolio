import React, { useState } from 'react';
import { CertificateContainer, Wrapper,Title, CertificateCardContainer } from './CertificateStyle';
import Slider from "react-slick";
import CertificateCard from './CertificateCard';
import { certificate } from '../../data/constants';

const Certificate=()=>{

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
    <CertificateContainer id="certficates">
        <Wrapper>
        <Title>Certificates</Title> 
        <CertificateCardContainer>
            {certificate
                    .map((certificate)=> 
                  
                         <CertificateCard certificate={certificate}/>
                   ) }     
        </CertificateCardContainer>
        </Wrapper>
  </CertificateContainer>
  );
}

export default Certificate;

