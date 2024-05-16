import styled from "styled-components";

import { BREAKPOINTS } from "@constants/data";

const StyledBlockArts = styled.section`
  width: 100%;
  margin-top: 40px;
  font-family: "Lexend Deca";
`;

const StyledBlockArtTitle = styled.h2`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 20px;
  color: ${(props) => props.theme.colors.lightGold};
  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: ${(props) => props.theme.fontSizes.extraSmall};
    line-height: 18px;
  }
`;

const StyledBlockArtInfo = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.extraLarge3};
  line-height: 40px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.lightBlack};
  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: ${(props) => props.theme.fontSizes.extraLarge2};
    line-height: 34px;
  }
`;

const StyledBlockItems = styled.div<{ type: string }>`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => (props.type === "main" ? "60px" : "20px")};
  @media (max-width: ${BREAKPOINTS.xl}) {
    grid-template-columns: ${(props) =>
      props.type === "main" ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: ${(props) =>
      props.type === "main" ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledItemsWrap = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.type === "main" ? "507px" : "auto")};
  @media (max-width: ${BREAKPOINTS.lg}) {
    height: auto;
  }
`;

export {
  StyledBlockArtInfo,
  StyledBlockArts,
  StyledBlockArtTitle,
  StyledBlockItems,
  StyledItemsWrap
};
