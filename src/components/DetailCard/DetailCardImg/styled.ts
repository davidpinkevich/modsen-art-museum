import styled from "styled-components";
import { BREAKPOINTS } from "@constants/data";

const StyledDetailWrap = styled.div`
  position: relative;
  height: 570px;
  width: 497px;
  min-width: 497px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    height: 480px;
    width: 397px;
    min-width: 397px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    height: 400px;
    width: 300px;
    min-width: 300px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    height: 420px;
  }
`;

const StyledDetailImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledDetailBtn = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  top: 16px;
  right: 16px;
`;

export { StyledDetailWrap, StyledDetailImg, StyledDetailBtn };
