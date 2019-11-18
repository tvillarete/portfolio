import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 1.4%;
  left: 13%;
  height: 5.5%;
  width: 3.5%;
  background: url("/safari.png");
  background-size: cover;
  animation-name: bounce;
  animation-timing-function: ease;
  animation-duration: 2s;
  transform-origin: bottom;

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-10px);
    }
    50% {
      transform: scale(1.05, 0.95) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`;

const SafariLogo = () => {
  return <Container></Container>;
};

export default SafariLogo;
