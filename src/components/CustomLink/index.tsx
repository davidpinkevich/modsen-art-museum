import { Link } from "react-router-dom";
import { StyledLink, StyledLinkImage, StyledLinkTitle } from "./styled";
import { type TypeLinkHeader } from "@src/types";

const CustomLink: React.FC<TypeLinkHeader> = ({
  type,
  path,
  img,
  alt,
  children
}) => {
  return (
    <StyledLink type={type}>
      <Link to={path}>
        <StyledLinkImage type={type}>
          <img src={img} alt={alt} />
        </StyledLinkImage>
        <StyledLinkTitle type={type}>{children}</StyledLinkTitle>
      </Link>
    </StyledLink>
  );
};

export { CustomLink };
