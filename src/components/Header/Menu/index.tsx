import { LinkHeader } from "../LinkHeader";
import homeImg from "@assets/icons/home.svg";
import favoriteImg from "@assets/icons/saved.svg";
import { StyledMenu } from "./styled";

const Menu = () => {
  return (
    <StyledMenu>
      <LinkHeader img={homeImg} alt="home" path="./" menu>
        Home
      </LinkHeader>
      <LinkHeader img={favoriteImg} alt="favorites" path="/favorite" menu>
        Your favorites
      </LinkHeader>
    </StyledMenu>
  );
};

export { Menu };
