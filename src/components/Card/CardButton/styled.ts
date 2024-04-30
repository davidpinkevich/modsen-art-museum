import styled from "styled-components";

const StyledCardBtn = styled.button`
  background-color: rgba(249, 249, 249, 1);
  border-radius: 50%;
  width: 59px;
  height: 59px;
  transition: all 0.2s;
  &:hover {
    background-color: rgba(251, 215, 178, 0.3);
  }
`;

const StyledCardBtnImg = styled.img`
  width: 24px;
  height: 24px;
`;

export { StyledCardBtn, StyledCardBtnImg };
