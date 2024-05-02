import styled from "styled-components";
import { BREAKPOINTS } from "@constants/data";

const StyledApp = styled.div<{ open: boolean }>`
  @media (max-width: ${BREAKPOINTS.sm}) {
    overflow: hidden;
    height: ${(props) => (props.open ? "100vh" : "auto")};
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: ${(props) => (props.open ? "100vw" : "none")};
      height: ${(props) => (props.open ? "100vh" : "none")};
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export { StyledApp };
