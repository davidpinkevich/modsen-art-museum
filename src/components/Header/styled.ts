import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(52, 51, 51, 1),
    rgba(72, 72, 72, 1),
    rgba(40, 40, 40, 1)
  );
  width: 100%;
  height: 127px;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { StyledHeader, StyledHeaderContainer };
