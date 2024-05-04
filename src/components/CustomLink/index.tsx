import { Link } from "react-router-dom";
import { StyledLink, StyledLinkImage, StyledLinkTitle } from "./styled";
import { type TypeLinkHeader } from "@src/types";

const CustomLink: React.FC<TypeLinkHeader> = (props) => {
  return (
    <StyledLink type={props.type}>
      <Link to={props.path}>
        <StyledLinkImage type={props.type}>
          <img src={props.img} alt={props.alt} />
        </StyledLinkImage>
        <StyledLinkTitle type={props.type}>{props.children}</StyledLinkTitle>
      </Link>
    </StyledLink>
  );
};

export { CustomLink };
