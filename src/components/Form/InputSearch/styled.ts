import styled from "styled-components";

const StyledInputBody = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 24px 16px;
  border-radius: 16px;
  color: black;
  font-size: 20px;
  width: 100%;
  background-color: rgba(57, 57, 57, 0.05);
  &::placeholder {
    font-size: 16px;
    color: rgba(57, 57, 57, 0.5);
  }
`;

const StyledInputImg = styled.img`
  position: absolute;
  right: 16px;
  top: 22px;
  width: 32px;
  height: 32px;
`;

const StyledValidate = styled.div`
  position: absolute;
  bottom: -24px;
  left: 0;
  color: rgba(206, 15, 0, 0.8);
  font-size: 16px;
  font-weight: 500;
`;

export { StyledInputBody, StyledInput, StyledValidate, StyledInputImg };
