import styled from "styled-components";

const StyledNF = styled.article<{ type: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: 507px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: ${(props) => (props.type === "detail" ? "10%" : "0px")};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledNFImage = styled.img<{ type: string }>`
  position: absolute;
  bottom: 35px;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  bottom: ${(props) => (props.type === "error" ? "65px" : "35px")};
`;

const StyledNFInfo = styled.p`
  object-fit: cover;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.huge2};
  font-weight: 500;
  color: ${(props) => props.theme.colors.lightBlack};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.extraLarge2};
  }
`;

export { StyledNF, StyledNFImage, StyledNFInfo };
