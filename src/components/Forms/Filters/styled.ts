import styled from "styled-components";

const StyledFilters = styled.div`
  display: flex;
  border-radius: 16px;
  gap: 5px;
  & button:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  & button:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

const StyledFiltersBtn = styled.button<{ type: string }>`
  text-align: center;
  padding: 16px;
  background-color: ${(props) =>
    props.type === "active"
      ? "rgba(224, 164, 73, 1)"
      : "rgba(57, 57, 57, 0.05)"};
  color: ${(props) =>
    props.type === "active" ? "rgba(255, 255, 255, 1)" : "rgba(57, 57, 57, 1)"};
  font-size: 16px;
  font-weight: ${(props) => (props.type === "active" ? 600 : 500)};
  text-shadow: ${(props) =>
    props.type === "active" ? "0px  2px 2px rgba(57, 57, 57, 1)" : "none"};
  flex-basis: 25%;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;

export { StyledFilters, StyledFiltersBtn };