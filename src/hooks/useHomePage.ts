import { useState, useEffect } from "react";
import { RANDOM_ARTS_VIEW, LENGTH_VIEW_MAIN } from "@constants/data";
import { getRandomPage } from "@utils/helpers/getRandomPage";
import { service } from "@utils/services/baseApi";
import { type TypeArt } from "@src/types";

const useHomePage = () => {
  const [arts, setArts] = useState<TypeArt[]>([]);
  const [loadArts, setLoadArts] = useState<boolean>(true);

  const [filter, setFilter] = useState<string>("public");
  const [search, setSearch] = useState<string>("");

  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const [randomImages, setRandomImages] = useState<TypeArt[]>([]);
  const [loadRandom, setLoadRandom] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoadArts(true);
      const data = await service.getArtsSearch(
        search,
        LENGTH_VIEW_MAIN,
        filter,
        page
      );
      if (data) {
        setArts(data.information);
        setTotal(data.total);
      }
      setLoadArts(false);
    };
    fetchData();
  }, [search, filter, page]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await service.getBaseArts(RANDOM_ARTS_VIEW, getRandomPage());
      if (data) setRandomImages(data);
      setLoadRandom(false);
    };
    fetchData();
  }, []);

  return {
    filter,
    setFilter,
    setSearch,
    setPage,
    randomImages,
    page,
    total,
    arts,
    loadArts,
    loadRandom
  };
};

export { useHomePage };
