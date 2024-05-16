import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledFormBody = styled.section`
  max-width: 762px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledFormTitle = styled.h2`
  font-family: "Lexend Deca";
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.massive};
  line-height: 80px;
  text-align: center;
  margin-top: 120px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    margin-top: 80px;
    font-size: ${(props) => props.theme.fontSizes.huge3};
    line-height: 54px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 30px;
    font-size: ${(props) => props.theme.fontSizes.extraLarge4};
    line-height: 40px;
  }
  color: ${(props) => props.theme.colors.lightBlack};
  & span {
    color: ${(props) => props.theme.colors.gold};
  }
`;

export { StyledForm, StyledFormBody, StyledFormTitle };
