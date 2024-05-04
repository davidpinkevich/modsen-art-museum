import { StyledHeader, StyledHeaderContainer } from "./styled";
import { Menu } from "./Menu";
import { Burger } from "./Burger";
import { CustomLink } from "../CustomLink";
import { Container } from "@styles/Container";
import logoImg from "@assets/icons/logo.svg";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container content="space-between">
        <StyledHeaderContainer>
          <CustomLink path="./" alt="logo" img={logoImg} type="logo">
            Museum of <span>Art</span>
          </CustomLink>
          <Menu />
          <Burger />
        </StyledHeaderContainer>
      </Container>
    </StyledHeader>
  );
};

export { Header };
