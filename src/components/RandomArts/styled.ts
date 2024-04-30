import styled from "styled-components";

const StyledRandomArts = styled.div`
  width: 100%;
  margin-top: 40px;
  font-family: "Lexend Deca";
`;

const StyledBlockArtTitle = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  color: rgba(224, 164, 73, 1);
`;

const StyledBlockArtInfo = styled.div`
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
  color: rgba(57, 57, 57, 1);
`;

const StyledRandomItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
`;

export {
  StyledRandomArts,
  StyledBlockArtTitle,
  StyledBlockArtInfo,
  StyledRandomItems
};
