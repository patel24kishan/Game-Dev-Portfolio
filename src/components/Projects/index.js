import React, { useState } from "react";
import {
  ProjectContainer,
  Wrapper,
  Title,
  ProjectToggleButtonGroup,
  ProjectToggleButton,
  ProjectDivider,
  ProjectCardContainer,
} from "./ProjectStyle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/constants";

const Projects = () => {
  const [projectToggle, setProjectToggle] = useState("Games");
  return (
    <ProjectContainer id="projects">
      <Wrapper>
        <Title>Projects</Title>

        <ProjectToggleButtonGroup>
          {projectToggle === "Games" ? (
            <ProjectToggleButton
              active
              value="Games"
              onClick={() => setProjectToggle("Games")}
            >
              Unity Games
            </ProjectToggleButton>
          ) : (
            <ProjectToggleButton
              value="Games"
              onClick={() => setProjectToggle("Games")}
            >
              Unity Games
            </ProjectToggleButton>
          )}

          <ProjectDivider />

          {projectToggle === "webapp" ? (
            <ProjectToggleButton
              active
              onClick={() => setProjectToggle("webapp")}
            >
              Web App's
            </ProjectToggleButton>
          ) : (
            <ProjectToggleButton onClick={() => setProjectToggle("webapp")}>
              Web App's
            </ProjectToggleButton>
          )}
          <ProjectDivider />

          {projectToggle === "softwareapp" ? (
            <ProjectToggleButton
              active
              onClick={() => setProjectToggle("softwareapp")}
            >
              Software App's
            </ProjectToggleButton>
          ) : (
            <ProjectToggleButton
              onClick={() => setProjectToggle("softwareapp")}
            >
              Software App's
            </ProjectToggleButton>
          )}
          <ProjectDivider />

          {projectToggle === "all" ? (
            <ProjectToggleButton active onClick={() => setProjectToggle("all")}>
              All
            </ProjectToggleButton>
          ) : (
            <ProjectToggleButton onClick={() => setProjectToggle("all")}>
              All
            </ProjectToggleButton>
          )}
        </ProjectToggleButtonGroup>

        <ProjectCardContainer>
          {projectToggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}

          {projects
            .filter((item) => item.category === projectToggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </ProjectCardContainer>
      </Wrapper>
    </ProjectContainer>
  );
};

export default Projects;
