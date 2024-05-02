import { CustomLink } from "../CustomLink";
import { LINK_MODSEN } from "@constants/data";
import { Container } from "@styles/Container";
import logoImg from "@assets/icons/logo.svg";
import logoModsen from "@assets/icons/modsen.svg";
import { StyledFooter } from "./styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container content="space-between">
        <CustomLink path="./" alt="logo" img={logoImg} type="logo-footer">
          Museum of <span>Art</span>
        </CustomLink>
        <a href={LINK_MODSEN}>
          <img src={logoModsen} alt="modsen" />
        </a>
      </Container>
    </StyledFooter>
  );
};

export { Footer };
