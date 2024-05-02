import { LinkHeader } from "../Header/LinkHeader";
import { Container } from "@styles/Container";
import logoImg from "@assets/icons/logo.svg";
import logoModsen from "@assets/icons/modsen.svg";
import { StyledFooter } from "./styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container content="space-between">
        <LinkHeader path="./" alt="logo" img={logoImg} type="logo-footer">
          Museum of <span>Art</span>
        </LinkHeader>
        <a href="https://www.modsen-software.com/">
          <img src={logoModsen} />
        </a>
      </Container>
    </StyledFooter>
  );
};

export { Footer };
