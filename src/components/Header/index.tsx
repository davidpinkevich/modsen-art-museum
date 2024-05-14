import { LINK_PATH } from "@constants/data";
import logoImg from "@assets/icons/logo.svg";
import { Container } from "@styles/Container";

import { CustomLink } from "../CustomLink";

import { Burger } from "./Burger";
import { Menu } from "./Menu";
import { StyledHeader, StyledHeaderContainer } from "./styled";

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
