import { StyledHeader, StyledHeaderContainer } from "./styled";
import { Menu } from "./Menu";
import { LinkHeader } from "./LinkHeader";
import { Container } from "@styles/Container";
import logoImg from "@assets/icons/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container content="space-between">
        <StyledHeaderContainer>
          <LinkHeader path="./" alt="logo" img={logoImg} type="logo">
            Museum of <span>Art</span>
          </LinkHeader>
          <Menu />
        </StyledHeaderContainer>
      </Container>
    </StyledHeader>
  );
};

export { Header };
