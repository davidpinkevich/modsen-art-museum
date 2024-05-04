import { getNotFound } from "@utils/helpers/getNotFound";
import img from "@assets/icons/not-found.webp";
import { StyledNF, StyledNFImage, StyledNFInfo } from "./styled";
import { type TypeNotFound } from "@src/types";

const NotFound: React.FC<TypeNotFound> = ({ type }) => {
  return (
    <StyledNF type={type}>
      <StyledNFImage src={img} />
      <StyledNFInfo>{getNotFound(type)}</StyledNFInfo>
    </StyledNF>
  );
};

export { NotFound };
