import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";
import { pulsLoading } from "@styles/animation";

const StyledLoading = styled.div`
  text-align: center;
  font-family: "Inter";
  font-size: 54px;
  color: rgba(224, 164, 73, 1);
  flex-grow: 1;
  @media (max-width: ${BREAKPOINTS.lg}) {
    height: 507px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 28px;
  }
`;

const StyledLoadingSpan = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: rgba(224, 164, 73, 1);
  @media (max-width: ${BREAKPOINTS.lg}) {
    width: 7px;
    height: 7px;
    margin: 0 4px;
    margin-top: 14px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 5px;
    height: 5px;
    margin: 0 3px;
    margin-top: 14px;
  }
`;

const SpanOne = styled(StyledLoadingSpan)`
  animation: ${pulsLoading} 0.4s ease 0s infinite;
`;

const SpanTwo = styled(StyledLoadingSpan)`
  animation: ${pulsLoading} 0.4s ease 0.1s infinite;
`;

const SpanThree = styled(StyledLoadingSpan)`
  animation: ${pulsLoading} 0.4s ease 0.2s infinite;
`;

export { SpanOne, SpanThree, SpanTwo, StyledLoading };
