import { getNotFound } from "@utils/helpers/getNotFound";
import imageError from "@assets/icons/404.svg";
import imageFind from "@assets/icons/not-found.webp";
import { type TypeNotFound } from "@src/types";

import { StyledNF, StyledNFImage, StyledNFInfo } from "./styled";

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
