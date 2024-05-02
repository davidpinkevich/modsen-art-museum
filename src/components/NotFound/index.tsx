import img from "@assets/icons/not-found.webp";
import { StyledNF, StyledNFImage, StyledNFInfo } from "./styled";

const NotFound: React.FC = () => {
  return (
    <StyledNF>
      <StyledNFImage src={img} />
      <StyledNFInfo>Arts not found</StyledNFInfo>
    </StyledNF>
  );
};

export { NotFound };
