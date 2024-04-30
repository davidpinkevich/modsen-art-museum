import { createContext } from "react";
import { type TypeContext, type TypeArt } from "@src/types";

const FavoritesContext = createContext<TypeContext>({
  favorites: [],
  addFavorite: (item: TypeArt) => {}
});

export { FavoritesContext };
