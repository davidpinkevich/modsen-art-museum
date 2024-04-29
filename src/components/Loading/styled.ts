import styled from "styled-components";
import { pulsLoading } from "@styles/animation";

const StyledLoading = styled.div`
  text-align: center;
  font-family: "Inter";
  font-size: 54px;
  color: rgba(224, 164, 73, 1);
  flex-grow: 1;
`;

const StyledLoadingSpan = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: rgba(224, 164, 73, 1);
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

export { StyledLoading, SpanOne, SpanTwo, SpanThree };
