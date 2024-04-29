import { createContext } from "react";
import { TypeContext, TypeArt } from "@src/types";

const FavoritesContext = createContext<TypeContext>({
  favorites: [],
  addFavorite: (item: TypeArt) => {}
});

export { FavoritesContext };
