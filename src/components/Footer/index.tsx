import { LINK_MODSEN, LINK_PATH } from "@constants/data";
import logoImg from "@assets/icons/logo.svg";
import logoModsen from "@assets/icons/modsen.svg";
import { Container } from "@styles/Container";

import { CustomLink } from "../CustomLink";

import { StyledFooter } from "./styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container content="space-between">
        <CustomLink
          path={LINK_PATH.BASE}
          alt="logo"
          img={logoImg}
          type="logo-footer">
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
