import { useContext } from "react";
import { FavoritesContext } from "@constants/context";
import { checkFavorite } from "@utils/helpers/checkFavorite";
import saved from "@assets/icons/saved.svg";
import unsaved from "@assets/icons/unsaved.svg";
import { StyledCardBtn, StyledCardBtnImg } from "./styled";
import { type TypeCard } from "@src/types";

const CardButton: React.FC<TypeCard> = ({ item }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const handlerButton = () => {
    addFavorite(item);
  };

  return (
    <StyledCardBtn onClick={handlerButton}>
      <StyledCardBtnImg
        src={checkFavorite(favorites, item.id) ? saved : unsaved}
      />
    </StyledCardBtn>
  );
};

export { CardButton };
