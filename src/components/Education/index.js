import React from 'react';
import {EducationContainer, Wrapper, Title, Description, TimeLineSection} from './EducationStyle';
import { Timeline, TimelineItem, TimelineConnector, TimelineContent, TimelineDot,TimelineSeparator, TimelineOppositeContent } from '@mui/lab';
import { education } from "../../data/constants";
import EducationCard from './EducationCard';

const Education=()=>{
    return (
        <EducationContainer id="education">
            <Wrapper>
            <Title>Education</Title> 
            <TimeLineSection>
            <Timeline>
            {education.map((education,index) => (
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        {index!==education.length -1 && <TimelineConnector/>}                      
                    </TimelineSeparator>
                    <TimelineContent>
                        <EducationCard education={education}/>
                    </TimelineContent>
                </TimelineItem>
            ))}
            </Timeline>
            </TimeLineSection>
        </Wrapper>
      </EducationContainer>
        );
}

export default Education;