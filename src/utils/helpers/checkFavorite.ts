import { type TypeArt } from "@src/types";

const checkFavorite = (favorites: TypeArt[], id: number) => {
  const arr = favorites.filter((item) => item.id === id).length;
  return Boolean(arr);
};

export { checkFavorite };
