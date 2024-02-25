import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "./ExperienceCard";
import {ExperienceContainer, Wrapper, Title, Description,TimeLineSection} from './ExperienceStyle';
import { Timeline, TimelineItem, TimelineConnector, TimelineContent, TimelineDot,TimelineSeparator, TimelineOppositeContent } from '@mui/lab';



const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <Wrapper>
        <Title> Work Experience</Title> 
        <TimeLineSection>
        <Timeline>
          {experiences.map((experience,index) => (
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    {index!==experience.length -1 && <TimelineConnector/>}
                    
                </TimelineSeparator>
                <TimelineContent>
                    <ExperienceCard experience={experience}/>
                </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        </TimeLineSection>
      </Wrapper>
    </ExperienceContainer>
  );
};

export default Experience;
