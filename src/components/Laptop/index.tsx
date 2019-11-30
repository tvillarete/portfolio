import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SafariLogo from "../SafariLogo";
import { Project } from "../../App";

const Container = styled.div`
  position: relative;
  margin: 10vh 0;
  width: 697px;
  max-width: 900px;
  height: 408px;
  background: url("/macbook.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  transition: all 0.1s ease;
  pointer-events: none;
  user-select: none;

  @media screen and (max-width: 735px) {
    margin: 5vh 0;
    width: 375px;
    height: 217px;
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 5%;
  left: 12%;
  width: 76%;
  height: 84%;
  background: url("/desktop.jpg");
  background-size: cover;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      filter: brightness(0);
      transform: scale(0.5);
      opacity: 0;
    }

    100% {
      filter: brightness(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`;

interface BrowserProps {
  isHidden: boolean;
}

const Browser = styled.div<BrowserProps>`
  display: ${props => props.isHidden && "none"};
  position: relative;
  top: 10%;
  margin: 0 auto;
  height: 70%;
  width: 80%;
  background: #2b2e33;
  background-size: 100% 100%;
  -webkit-animation: scale 3s;
  animation: scale 3s;
  overflow: hidden;
  border-radius: 2px;
`;

const BrowserHeader = styled.img`
  position: absolute;
  max-width: 100%;
`;

const BrowserContent = styled.div`
  position: absolute;
  top: 3.8%;
  left: 0.3%;
  right: 0.3%;
  bottom: 0;
  background-size: cover;
`;

const Video = styled.video`
  width: 100%;
`;

interface Props {
  projects: Project[];
  curProject: number;
  setCurProject: (project: number) => void;
}

const Laptop = ({ projects, curProject, setCurProject }: Props) => {
  const [browserHidden, setBrowserHidden] = useState(true);
  const videoSrc = projects[curProject].videoSrc;

  useEffect(() => {
    setTimeout(() => {
      setBrowserHidden(false);
    }, 1500);
  }, []);

  return (
    <Container>
      <Screen>
        <Browser isHidden={browserHidden}>
          <BrowserHeader alt="browser header" src="/BrowserHeader.jpg" />
          <BrowserContent>
            <Video key={videoSrc} autoPlay muted playsInline loop>
              <source src={videoSrc} type="video/mp4" />
            </Video>
          </BrowserContent>
        </Browser>
        <SafariLogo />
      </Screen>
    </Container>
  );
};

export default Laptop;
