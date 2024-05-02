import styled from "styled-components";
import { BREAKPOINTS } from "@constants/data";

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 127px;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 120px;
  @media (max-width: ${BREAKPOINTS.md}) {
    height: 120px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    height: 80px;
  }
`;

export { StyledFooter };
