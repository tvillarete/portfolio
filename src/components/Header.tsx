import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 735px) {
    margin-top: 4vh;
  }
`;

const Title = styled.h1`
  margin: 3vw 0 0 0;
  font-size: calc(24px + 3vw);
  font-weight: 800;
`;

const Subtitle = styled.h3`
  margin: 0;
  font-size: calc(18px + 1vw);
  font-weight: 400;

  @media screen and (max-width: 735px) {
    font-weight: 300;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  margin: 24px;
  font-size: 16px;
  transition: all 0.3s;
  text-decoration: none;
  color: #008eff;
  cursor: pointer;

  @media (prefers-color-scheme: dark) {
    :hover {
      filter: brightness(1.3);
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <Title>Tanner Villarete</Title>
      <Subtitle>Frontend Developer</Subtitle>
      <LinkContainer>
        <Link rel="noopener" target="_blank" href="https://www.github.com/tvillarete">
          GitHub
        </Link>
        <Link rel="noopener" target="_blank" href="https://www.linkedin.com/in/tvillarete/">
          LinkedIn
        </Link>
      </LinkContainer>
    </Container>
  );
};

export default Header;
