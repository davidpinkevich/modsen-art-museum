import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StyledPaginationBtn = styled.button<{ type?: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.type === "active"
      ? "rgba(241, 121, 0, 1)"
      : "rgba(255, 255, 255, 1)"};
  color: ${(props) =>
    props.type === "active" ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};
  align-items: center;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 22px;
  line-height: 140%;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.6);
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`;

const StyledPaginationImg = styled.img`
  width: 20px;
  height: 20px;
`;

export { StyledPagination, StyledPaginationBtn, StyledPaginationImg };
