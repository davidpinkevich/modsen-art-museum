import { getNotFound } from "@utils/helpers/getNotFound";
import imageFind from "@assets/icons/not-found.webp";
import imageError from "@assets/icons/404.svg";
import { StyledNF, StyledNFImage, StyledNFInfo } from "./styled";
import { type TypeNotFound } from "@src/types";

const NotFound: React.FC<TypeNotFound> = ({ type }) => {
  return (
    <StyledNF type={type}>
      <StyledNFImage
        type="error"
        src={type !== "error" ? imageFind : imageError}
      />
      <StyledNFInfo>{getNotFound(type)}</StyledNFInfo>
    </StyledNF>
  );
};

export { NotFound };
