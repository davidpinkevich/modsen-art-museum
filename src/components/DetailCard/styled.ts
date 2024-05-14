import styled from "styled-components";
import { BREAKPOINTS } from "@constants/data";

const StyledDetail = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 80px;
  margin-top: 120px;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.lg}) {
    gap: 40px;
    margin-top: 80px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
  }
`;

export { StyledDetail };
