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
  color: rgba(57, 57, 57, 1);
  font-size: 32px;
  margin-bottom: 15px;
  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 28px;
    margin-bottom: 8px;
  }
`;

const StyledInfoName = styled.p`
  font-size: 24px;
  color: rgba(224, 164, 73, 1);
`;

const StyledInfoDate = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: rgba(57, 57, 57, 1);
`;

const StyledInfoString = styled.p`
  font-size: 16px;
  color: rgba(224, 164, 73, 1);
  & span {
    color: rgba(57, 57, 57, 1);
  }
`;

export {
  StyledDetailCardInfo,
  StyledInfoBlock,
  StyledInfoTitle,
  StyledInfoName,
  StyledInfoDate,
  StyledInfoString
};
