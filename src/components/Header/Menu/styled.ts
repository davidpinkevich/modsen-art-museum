import styled from "styled-components";
import { BREAKPOINTS } from "@constants/data";

const StyledMenu = styled.div<{ open: boolean }>`
  display: flex;
  gap: 32px;
  transition: all 0.2s;
  @media (max-width: ${BREAKPOINTS.sm}) {
    background: linear-gradient(
      to right,
      rgba(52, 51, 51, 1),
      rgba(72, 72, 72, 1),
      rgba(40, 40, 40, 1)
    );
    position: absolute;
    top: 80px;
    height: 120px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    gap: 20px;
    right: ${(props) => (props.open ? "0px" : "-100%")};
  }
`;

const StyledMenuBtn = styled.button`
  background-color: inherit;
`;

export { StyledMenu, StyledMenuBtn };
