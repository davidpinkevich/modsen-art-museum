import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledDetailCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Lexend Deca";
  gap: 20px;
`;

const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledInfoTitle = styled.h2`
  color: ${(props) => props.theme.colors.lightBlack};
  font-size: ${(props) => props.theme.fontSizes.extraLarge3};
  margin-bottom: 15px;
  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: ${(props) => props.theme.fontSizes.extraLarge2};
    margin-bottom: 8px;
  }
`;

const StyledInfoName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  color: ${(props) => props.theme.colors.lightGold};
`;

const StyledInfoDate = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 700;
  color: ${(props) => props.theme.colors.lightBlack};
`;

const StyledInfoString = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.lightGold};
  & span {
    color: ${(props) => props.theme.colors.lightBlack};
  }
`;

export {
  StyledDetailCardInfo,
  StyledInfoBlock,
  StyledInfoDate,
  StyledInfoName,
  StyledInfoString,
  StyledInfoTitle
};
