import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  background-color: inherit;
  z-index: 20;
  top: 26px;
  right: 20px;
  display: flex;
  align-items: center;
  width: 38px;
  height: 24px;
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    transition: 0.2s all;
  }
  &::before {
    top: ${(props) => (props.open ? "50%" : "0")};
    transform: ${(props) =>
      props.open ? "rotate(-45deg) translate(0, -50%)" : "none"};
  }
  &::after {
    bottom: ${(props) => (props.open ? "50%" : "0")};
    transform: ${(props) =>
      props.open ? "rotate(45deg) translate(0, 50%)" : "none"};
  }
`;

const StyledBurgerSpan = styled.span<{ open: boolean }>`
  height: 2px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  transform: ${(props) => (props.open ? "scale(0)" : "scale(1)")};
`;

export { StyledBurger, StyledBurgerSpan };
