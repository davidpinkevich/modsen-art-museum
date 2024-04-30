import styled from "styled-components";

const StyledCardInfo = styled.div`
  flex-grow: 1;
  align-items: flex-start;
  height: 100%;
`;

const StyledCardTitle = styled.h3`
  font-weight: 500;
  font-size: 17.54px;
  line-height: 26.32px;
  color: rgba(57, 57, 57, 1);
`;

const StyledCardName = styled.p`
  font-weight: 400;
  font-size: 15.35px;
  line-height: 26.32px;
  color: rgba(224, 164, 73, 1);
`;

const StyledCardPublic = styled.p`
  font-weight: 700;
  font-size: 15.35px;
  line-height: 26.32px;
  color: rgba(57, 57, 57, 1);
`;

export { StyledCardInfo, StyledCardTitle, StyledCardName, StyledCardPublic };
