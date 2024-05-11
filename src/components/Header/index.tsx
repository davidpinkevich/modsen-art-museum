import { StyledHeader, StyledHeaderContainer } from "./styled";
import { Menu } from "./Menu";
import { Burger } from "./Burger";
import { CustomLink } from "../CustomLink";
import { LINK_PATH } from "@constants/data";
import { Container } from "@styles/Container";
import logoImg from "@assets/icons/logo.svg";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container content="space-between">
        <StyledHeaderContainer>
          <CustomLink
            path={LINK_PATH.BASE}
            alt="logo"
            img={logoImg}
            type="logo">
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
