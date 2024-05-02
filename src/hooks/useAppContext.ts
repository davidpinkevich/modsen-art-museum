import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useAppContext = () => {
  const [favorites, addFavorite] = useLocalStorage([], "favorites");
  const [open, setOpen] = useState<boolean>(false);

  return { favorites, addFavorite, open, setOpen };
};

export { useAppContext };
