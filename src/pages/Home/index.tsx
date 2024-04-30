import { useEffect, useState } from "react";
import { service } from "@utils/services/baseApi";
import { RANDOM_ARTS_VIEW } from "@constants/data";
import { getRandomPage } from "@utils/helpers/getRandomPage";
import { Forms } from "@components/Form";
import { RandomArts } from "@components/RandomArts";
import { type TypeArt } from "@src/types";

const Home: React.FC = () => {
  const [randomImages, setRandomImages] = useState<TypeArt[]>([]);
  const [loadRandom, setLoadRandom] = useState<boolean>(true);
  console.log("randomImages: ", randomImages);
  useEffect(() => {
    const fetchData = async () => {
      const data = await service.getBaseArts(RANDOM_ARTS_VIEW, getRandomPage());
      if (data) setRandomImages(data);
      setLoadRandom(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Forms />
      <RandomArts data={randomImages} load={loadRandom} />
    </div>
  );
};

export { Home };
