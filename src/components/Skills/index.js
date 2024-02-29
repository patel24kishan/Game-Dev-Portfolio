import React from 'react';
import {Container, Wrapper, Title, Description, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage} from './SkillStyle';
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";


// ADD '<SkillImage src={item.image} /> under SkillItem before {item.name} '
const Skills=()=>{
    return ( <Container id="skills">
    <Wrapper>
      <Title>Skills</Title>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Tilt>
            <Skill key={`skill-${index}`}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index_x) => (
                  <SkillItem key={`skill-x-${index_x}`}>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          </Tilt>
        ))}
      </SkillsContainer>
    </Wrapper>
  </Container>
);
}

export default Skills;