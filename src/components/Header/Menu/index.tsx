import { useContext } from "react";
import { Context } from "@constants/context";
import { LINK_PATH } from "@constants/data";
import { CustomLink } from "@components/CustomLink";
import homeImg from "@assets/icons/home.svg";
import favorite from "@assets/icons/favorite.svg";
import { StyledMenu, StyledMenuBtn } from "./styled";

const Menu: React.FC = () => {
  const { open, setOpen } = useContext(Context);
  const handlerMenu = () => {
    setOpen(false);
  };

  return (
    <StyledMenu open={open}>
      <StyledMenuBtn onClick={handlerMenu}>
        <CustomLink img={homeImg} alt="home" path={LINK_PATH.BASE} type="menu">
          Home
        </CustomLink>
      </StyledMenuBtn>
      <StyledMenuBtn onClick={handlerMenu}>
        <CustomLink
          img={favorite}
          alt="favorites"
          path={LINK_PATH.FAVORITES}
          type="menu">
          Your favorites
        </CustomLink>
      </StyledMenuBtn>
    </StyledMenu>
  );
};

export { Menu };
