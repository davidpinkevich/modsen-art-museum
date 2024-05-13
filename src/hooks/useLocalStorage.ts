import { useEffect, useState } from "react";
import { type TypeArt } from "@src/types";

const useLocalStorage = (init: TypeArt[], key: string) => {
  const getValue = () => {
    const store = localStorage.getItem(key);
    if (store) {
      return JSON.parse(store);
    } else {
      return init;
    }
  };
  const [favorites, setSavorites] = useState(getValue);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item: TypeArt) => {
    const length = favorites.filter((x: TypeArt) => x.id === item.id).length;
    if (!length) {
      setSavorites([...favorites, item]);
    } else {
      const newArr = favorites.filter((x: TypeArt) => x.id !== item.id);
      setSavorites([...newArr]);
    }
  };

  return { favorites, addFavorite, open, setOpen };
};

export { useLocalStorage };
