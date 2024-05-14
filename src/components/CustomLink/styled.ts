import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledLink = styled.div<{ type: string }>`
  a {
    display: flex;
    align-items: ${(props) => (props.type === "menu" ? "center" : "flex-end")};
    gap: 5px;
    @media (max-width: ${BREAKPOINTS.sm}) {
      margin-top: ${(props) => (props.type === "logo-footer" ? "5px" : "auto")};
      pointer-events: ${(props) => (props.type === "logo" ? "none" : "auto")};
    }
  }
`;

const StyledLinkImage = styled.div<{ type: string }>`
  position: relative;
  width: ${(props) => (props.type === "menu" ? "20px" : "62px")};
  height: ${(props) => (props.type === "menu" ? "20px" : "50px")};
  @media (max-width: ${BREAKPOINTS.md}) {
    width: ${(props) => (props.type === "menu" ? "20px" : "42px")};
    height: ${(props) => (props.type === "menu" ? "20px" : "35px")};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: ${(props) => (props.type === "menu" ? "28px" : "42px")};
    height: ${(props) => (props.type === "menu" ? "28px" : "35px")};
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledLinkTitle = styled.h2<{ type: string }>`
  font-size: ${(props) => (props.type === "menu" ? "16px" : "18px")};
  transition: all 0.2s;
  color: ${(props) =>
    props.type === "logo-footer"
      ? "rgba(57, 57, 57, 1)"
      : "rgba(255, 255, 255, 1)"};

  &:hover {
    color: rgba(224, 164, 73, 1);
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${(props) => (props.type === "menu" ? "28px" : "18px")};
  }
  & span {
    color: rgba(224, 164, 73, 1);
    font-weight: 600;
  }
`;

export { StyledLink, StyledLinkImage, StyledLinkTitle };
