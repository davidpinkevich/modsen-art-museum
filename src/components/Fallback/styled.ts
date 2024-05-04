import styled from "styled-components";

const StyledFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

const StyledFallbackBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledFallbackImg = styled.img`
  width: 70px;
  height: 70px;
`;

const StyledFallbackTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

const StyledFallbackInfo = styled.p`
  font-size: 20px;
  color: rgba(57, 57, 57, 1);
`;

export {
  StyledFallback,
  StyledFallbackBlock,
  StyledFallbackImg,
  StyledFallbackTitle,
  StyledFallbackInfo
};
