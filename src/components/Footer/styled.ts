import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 127px;
  background-color: ${(props) => props.theme.colors.white};
  margin-top: 120px;
  @media (max-width: ${BREAKPOINTS.md}) {
    height: 120px;
    margin-top: 80px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    height: 80px;
    margin-top: 40px;
  }
`;

export { StyledFooter };
