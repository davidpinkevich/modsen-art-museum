import styled from "styled-components";

const StyledCardBtn = styled.button`
  background-color: ${(props) => props.theme.colors.lightWhite};
  border-radius: 50%;
  align-self: center;
  width: 59px;
  height: 59px;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

const StyledCardBtnImg = styled.img`
  width: 24px;
  height: 24px;
`;

export { StyledCardBtn, StyledCardBtnImg };
