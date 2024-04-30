import { LinkHeader } from "../LinkHeader";
import homeImg from "@assets/icons/home.svg";
import favorite from "@assets/icons/favorite.svg";
import { StyledMenu } from "./styled";

const Menu: React.FC = () => {
  return (
    <StyledMenu>
      <LinkHeader img={homeImg} alt="home" path="./" type="menu">
        Home
      </LinkHeader>
      <LinkHeader img={favorite} alt="favorites" path="/favorite" type="menu">
        Your favorites
      </LinkHeader>
    </StyledMenu>
  );
};

export { Menu };
