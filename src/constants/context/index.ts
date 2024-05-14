import { createContext } from "react";

import { type TypeContext } from "@src/types";

const Context = createContext<TypeContext>({
  favorites: [],
  addFavorite: () => {},
  open: false,
  setOpen: () => {}
});

export { Context };
