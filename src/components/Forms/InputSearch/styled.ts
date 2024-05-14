import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledInputBody = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 24px 16px;
  border-radius: 16px;
  color: rgba(0, 0, 0, 0.75);
  font-size: 20px;
  width: 100%;
  background-color: rgba(57, 57, 57, 0.05);
  transition: all 0.2s;
  @media (max-width: ${BREAKPOINTS.lg}) {
    padding: 16px 12px;
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    border-radius: 10px;
  }
  &:hover {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 1);
    background-color: rgba(57, 57, 57, 0.1);
  }
  &::placeholder {
    font-size: 16px;
    color: rgba(57, 57, 57, 0.5);
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;

const StyledInputImg = styled.img`
  position: absolute;
  right: 16px;
  top: 22px;
  width: 32px;
  height: 32px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    top: 10px;
  }
`;

const StyledValidate = styled.div`
  position: absolute;
  bottom: -24px;
  left: 0;
  color: rgba(206, 15, 0, 0.8);
  font-size: 16px;
  font-weight: 500;
`;

export { StyledInput, StyledInputBody, StyledInputImg, StyledValidate };
