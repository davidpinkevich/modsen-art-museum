import styled from "styled-components";
import { BREAKPOINTS } from "@constants/data";

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(52, 51, 51, 1),
    rgba(72, 72, 72, 1),
    rgba(40, 40, 40, 1)
  );
  width: 100%;
  height: 127px;
  @media (max-width: ${BREAKPOINTS.md}) {
    height: 120px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    height: 80px;
  }
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export { StyledHeader, StyledHeaderContainer };
