import React, { useState } from "react";
import { Header, Laptop, ProjectList } from "./components";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;

    @media (prefers-color-scheme: dark) {
      background: black;

      h1,h2,h3,h4,h5,h6 {
        color: white;
      }

      a {
        color: dodgerblue;
      }
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 930px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export interface Project {
  name: string;
  url: string;
  videoSrc: string;
}

const projects: Project[] = [
  {
    name: "Apple Music.js",
    url: "http://tannerv.com/music",
    videoSrc: "/AppleMusicJS.mp4"
  },
  {
    name: "Playce",
    url: "http://tannerv.com/playce",
    videoSrc: "/Playce.mp4"
  },
  {
    name: "Sprinter",
    url: "http://tannerv.com/Sprinter",
    videoSrc: "/Sprinter.mp4"
  },
  {
    name: "iFixit Product Reviews",
    url: "https://www.ifixit.com/Store/iPhone/iPhone-7-Replacement-Battery/IF332-005?o=11",
    videoSrc: "/Reviews.mp4"
  },
];

const App: React.FC = () => {
  const [curProject, setCurProject] = useState(0);

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <ContentContainer>
        <Laptop
          projects={projects}
          curProject={curProject}
          setCurProject={setCurProject}
        />
        <ProjectList
          projects={projects}
          curProject={curProject}
          setCurProject={setCurProject}
        />
      </ContentContainer>
    </div>
  );
};

export default App;
