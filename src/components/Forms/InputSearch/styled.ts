import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledInputBody = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 24px 16px;
  border-radius: 16px;
  color: ${(props) => props.theme.colors.input.black};
  font-size: ${(props) => props.theme.fontSizes.medium};
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondWhite};
  transition: all 0.2s;
  @media (max-width: ${BREAKPOINTS.lg}) {
    padding: 16px 12px;
    font-size: ${(props) => props.theme.fontSizes.mediumSmall};
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    border-radius: 10px;
  }
  &:hover {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
    box-shadow: ${(props) =>
      `0px 0px 3px 1px ${props.theme.colors.input.hover}`};
  }
  &:focus {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 1);
    box-shadow: ${(props) =>
      `0px 0px 3px 1px ${props.theme.colors.input.focus}`};
    background-color: ${(props) => props.theme.colors.input.back};
  }
  &::placeholder {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.input.placeholder};
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
  color: ${(props) => props.theme.colors.error};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 500;
`;

export { StyledInput, StyledInputBody, StyledInputImg, StyledValidate };
