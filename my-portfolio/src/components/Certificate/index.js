import React, { useState } from 'react';
import { CertificateContainer, Wrapper,Title, CertificateCardContainer } from './CertificateStyle';
import { Div } from '../ProfileBgAnimation/HeroBgAnimationStyle';
import CertificateCard from './CertificateCard';
import { certificate } from '../../data/constants';

const Certificate=()=>{

    return (
    <CertificateContainer id="certficates">
        <Wrapper>
        <Title>My Certficates</Title> 
        
        <CertificateCardContainer>
       
            {certificate
            .map((certificate)=> 
            <CertificateCard certificate={certificate}/>
            )}
                
        </CertificateCardContainer>
        </Wrapper>
  </CertificateContainer>
  );
}

export default Certificate;