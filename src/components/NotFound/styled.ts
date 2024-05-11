import styled from "styled-components";

const StyledNF = styled.div<{ type: string }>`
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
  font-size: 52px;
  font-weight: 500;
  color: rgba(57, 57, 57, 1);
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export { StyledNF, StyledNFImage, StyledNFInfo };
