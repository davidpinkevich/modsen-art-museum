import { useContext } from "react";
import { Context } from "@constants/context";
import { BlockArts } from "@components/BlockArts";

const Favorites: React.FC = () => {
  const { favorites } = useContext(Context);

  return <BlockArts data={favorites} type="favorites" />;
};

export { Favorites };
