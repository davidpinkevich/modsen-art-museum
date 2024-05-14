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
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  margin-top: 120px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    margin-top: 80px;
    font-size: 50px;
    line-height: 54px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 30px;
    font-size: 34px;
    line-height: 40px;
  }
  color: rgba(57, 57, 57, 1);
  & span {
    color: rgba(241, 121, 0, 1);
  }
`;

export { StyledForm, StyledFormBody, StyledFormTitle };
