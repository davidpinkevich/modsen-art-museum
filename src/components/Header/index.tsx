import { useState } from "react";
import { StyledHeader, StyledHeaderContainer } from "./styled";
import { Menu } from "./Menu";
import { Burger } from "./Burger";
import { LinkHeader } from "./LinkHeader";
import { Container } from "@styles/Container";
import logoImg from "@assets/icons/logo.svg";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <StyledHeader>
      <Container content="space-between">
        <StyledHeaderContainer>
          <LinkHeader path="./" alt="logo" img={logoImg} type="logo">
            Museum of <span>Art</span>
          </LinkHeader>
          <Menu open={open} />
          <Burger open={open} setOpen={setOpen} />
        </StyledHeaderContainer>
      </Container>
    </StyledHeader>
  );
};

export { Header };
