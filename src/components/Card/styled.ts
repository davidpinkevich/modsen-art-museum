import styled from "styled-components";

const StyledCard = styled.div<{ type: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter";
  gap: 16px;
  transition: all 0.2s;
  padding: ${(props) => (props.type === "small" ? "16px 13px" : "17px 24px")};
  background-color: rgba(255, 255, 255, 1);
  &:hover {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
`;

export { StyledCard };
