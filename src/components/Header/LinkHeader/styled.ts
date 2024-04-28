import styled from "styled-components";

const StyledLink = styled.div<{ type: string }>`
  a {
    display: flex;
    align-items: ${(props) => (props.type === "menu" ? "center" : "flex-end")};
    gap: 5px;
  }
`;

const StyledLinkImage = styled.div<{ type: string }>`
  position: relative;
  width: ${(props) => (props.type === "menu" ? "20px" : "62px")};
  height: ${(props) => (props.type === "menu" ? "20px" : "50px")};
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledLinkTitle = styled.h2<{ type: string }>`
  font-size: ${(props) => (props.type === "menu" ? "16px" : "18px")};
  color: white;
  & span {
    color: rgba(224, 164, 73, 1);
    font-weight: 600;
  }
`;

export { StyledLink, StyledLinkImage, StyledLinkTitle };
