import React from "react";
import styled from "styled-components";
import { Project } from "../../App";

interface ContainerProps {
  selected: boolean;
}

const LinkContainer = styled.a`
  display: none;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  border-bottom: 1px solid lightgray;
  cursor: default;
  transition: background 0.3s;
  background: ${props => props.selected && "#0070c91c"};

  ${LinkContainer} {
    display: ${props => props.selected && "flex"};
  }

  :hover {
    background: ${props => !props.selected && "rgba(0, 0, 0, 0.02)"};

    ${LinkContainer} {
      display: flex;
    }
  }

  @media (prefers-color-scheme: dark) {
    border-bottom: 1px solid #404040;
    background: ${props => props.selected && "#ffffff1f"};

    :hover {
      background: ${props => !props.selected && "#ffffff0d"};
    }
  }
`;

const Label = styled.h3`
  margin: 0;
  font-weight: 500;
`;

const Link = styled.h3`
  margin: 0 4px;
  font-size: 16px;
  font-weight: 300;
  transition: all 0.3s;
  text-decoration: none;
  color: #0070c9;
  cursor: pointer;

  @media (prefers-color-scheme: dark) {
    :hover {
      filter: brightness(1.3);
    }
  }
`;

const Icon = styled.img`
  max-width: 16px;
`;

interface Props {
  project: Project;
  onClick: () => void;
  selected: boolean;
}

const ListItem = ({ project, selected, onClick }: Props) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <Label>{project.name}</Label>
      <LinkContainer
        style={{ textDecoration: "none" }}
        href={project.url}
        target="_blank"
      >
        <Link>Visit</Link>
        <Icon src="/external-link.svg" />
      </LinkContainer>
    </Container>
  );
};

export default ListItem;
