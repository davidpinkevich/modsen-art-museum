import { useContext } from "react";
import { Context } from "@constants/context";
import { CustomLink } from "@components/CustomLink";
import homeImg from "@assets/icons/home.svg";
import favorite from "@assets/icons/favorite.svg";
import { StyledMenu } from "./styled";

const Menu: React.FC = () => {
  const { open } = useContext(Context);

  return (
    <StyledMenu open={open}>
      <CustomLink img={homeImg} alt="home" path="./" type="menu">
        Home
      </CustomLink>
      <CustomLink img={favorite} alt="favorites" path="favorites" type="menu">
        Your favorites
      </CustomLink>
    </StyledMenu>
  );
};

export { Menu };
