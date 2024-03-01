import React from 'react';
import { styled } from 'styled-components';
import ProfileBgAnimation from '../ProfileBgAnimation';
import { ProfileContainer, ProfileBg, ProfileLeftContainer, ProfileImg, ProfileRightContainer, ProfileInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './ProfileStyle';
import ProfileImage from '../../images/ProfileImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const Profile=()=>{
    return (
    <div id="about">
            <ProfileContainer>
                <ProfileBg>
                    <ProfileBgAnimation/>
                </ProfileBg>
                <ProfileInnerContainer>
                    <ProfileLeftContainer>
                        <Title>
                            Hello, I am <br/>{Bio.name}
                        </Title>
                        <TextLoop>
                            I am 
                            <Span>
                                <Typewriter
                                 options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}/>
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume_gamedeveloper} target="_blank">Review CV</ResumeButton>
                    </ProfileLeftContainer>
                    <ProfileRightContainer>
                                <ProfileImg src={ProfileImage} alt="Profile"/>
                    </ProfileRightContainer>
                </ProfileInnerContainer>
            </ProfileContainer>
    </div>)
}

export default Profile;