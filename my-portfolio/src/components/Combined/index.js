import React from 'react';
import { styled } from 'styled-components';
import ProfileBgAnimation from '../ProfileBgAnimation';
import { ProfileContainer, ProfileBg, ProfileLeftContainer, ProfileImg, ProfileRightContainer, ProfileInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './CombineStyle';
import ProfileImage from '../../images/ProfileImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import Education from '../Education';
import Certificate from '../Certificate';

const Combined=()=>{
    return (
    <div id="about">
            <ProfileContainer>
                <ProfileBg>
                    <ProfileBgAnimation/>
                </ProfileBg>
                <ProfileInnerContainer>
                    <ProfileLeftContainer>
                        <Education/>
                    </ProfileLeftContainer>
                    <ProfileRightContainer>
                            <Certificate/>    
                    </ProfileRightContainer>
                </ProfileInnerContainer>
            </ProfileContainer>
    </div>)
}

export default Combined;