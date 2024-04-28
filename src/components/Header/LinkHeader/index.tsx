import { Link } from "react-router-dom";
import { StyledLink, StyledLinkImage, StyledLinkTitle } from "./styled";
import { TypeLinkHeader } from "@src/types/components";

const LinkHeader: React.FC<TypeLinkHeader> = (props) => {
  return (
    <StyledLink menu={props.menu}>
      <Link to={props.path}>
        <StyledLinkImage menu={props.menu}>
          <img src={props.img} alt={props.alt} />
        </StyledLinkImage>
        <StyledLinkTitle menu={props.menu}>{props.children}</StyledLinkTitle>
      </Link>
    </StyledLink>
  );
};

export { LinkHeader };
