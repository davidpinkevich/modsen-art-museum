import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledApp = styled.div<{ open: boolean }>`
  @media (max-width: ${BREAKPOINTS.sm}) {
    position: ${(props) => (props.open ? "fixed" : "relative")};
    top: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    &:after {
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      width: ${(props) => (props.open ? "100%" : "none")};
      height: ${(props) => (props.open ? "100%" : "none")};
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export { StyledApp };
