import React from "react";
import styled from "styled-components";
import { Project } from "../../App";
import ListItem from "./ListItem";

const Container = styled.div`
  flex: 0 0 25%;
  margin: 10vh 0;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (max-width: 930px) {
    margin: 0 0 10vh 0;
    flex: 1;
    width: 90vw;
    max-width: 540px;
  }
`;

interface Props {
  projects: Project[];
  curProject: number;
  setCurProject: (project: number) => void;
}

const ProjectList = ({ projects, curProject, setCurProject }: Props) => {
  return (
    <Container>
      {projects.map((project, index) => (
        <ListItem
          key={`project-${index}`}
          onClick={() => setCurProject(index)}
          project={project}
          selected={index === curProject}
        />
      ))}
    </Container>
  );
};

export default ProjectList;
