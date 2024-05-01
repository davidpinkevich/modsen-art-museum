import styled from "styled-components";

const StyledNF = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const StyledNFImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledNFInfo = styled.p`
  object-fit: cover;
  text-align: center;
  font-size: 52px;
  font-weight: 500;
`;

export { StyledNF, StyledNFImage, StyledNFInfo };
