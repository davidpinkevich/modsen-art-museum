import styled from "styled-components";
import { BREAKPOINTS } from "@constants/data";

const StyledBlockArts = styled.div`
  width: 100%;
  margin-top: 40px;
  font-family: "Lexend Deca";
`;

const StyledBlockArtTitle = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  color: rgba(224, 164, 73, 1);
  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const StyledBlockArtInfo = styled.div`
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
  color: rgba(57, 57, 57, 1);
  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 28px;
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
  StyledBlockArts,
  StyledBlockArtTitle,
  StyledBlockArtInfo,
  StyledBlockItems,
  StyledItemsWrap
};
