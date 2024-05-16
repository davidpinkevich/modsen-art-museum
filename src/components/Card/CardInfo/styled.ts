import styled from "styled-components";

const StyledCardInfo = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const StyledCardTitle = styled.h3`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.mediumSmall};
  line-height: 26.32px;
  color: ${(props) => props.theme.colors.lightBlack};
`;

const StyledCardName = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 26.32px;
  color: ${(props) => props.theme.colors.lightGold};
`;

const StyledCardPublic = styled.p`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 26.32px;
  color: ${(props) => props.theme.colors.lightBlack};
`;

export { StyledCardInfo, StyledCardName, StyledCardPublic, StyledCardTitle };
