import styled from "styled-components";

const StyledNF = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: 507px;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export { StyledNF, StyledNFImage, StyledNFInfo };
