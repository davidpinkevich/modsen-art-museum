import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledCardWrapper = styled.div<{ type: string }>`
  width: 100%;
`;

const StyledCard = styled.div<{ type: string }>`
  display: flex;
  justify-content: space-between;
  font-family: "Inter";
  gap: 16px;
  min-height: 120px;
  transition: all 0.2s;
  margin: 0 auto;
  bottom: 60px;
  position: ${(props) => (props.type === "main" ? "relative" : "static")};
  width: ${(props) => (props.type === "main" ? "90%" : "100%")};
  padding: ${(props) => (props.type === "random" ? "16px 13px" : "17px 24px")};
  background-color: rgba(255, 255, 255, 1);
  &:hover {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    &:hover {
      transform: scale(1);
    }
  }
`;

const StyledCardImg = styled.img<{ type: string }>`
  transition: all 0.2s;
  width: ${(props) => (props.type === "main" ? "100%" : "80px")};
  height: ${(props) => (props.type === "main" ? "387px" : "80px")};
  &:hover {
    box-shadow: ${(props) =>
      props.type === "main" ? "0px 0px 3px 2px rgba(0, 0, 0, 0.5)" : "none"};
    transform: ${(props) => (props.type === "main" ? "scale(1.01)" : "none")};
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    &:hover {
      transform: scale(1);
    }
  }
`;

export { StyledCard, StyledCardImg, StyledCardWrapper };
