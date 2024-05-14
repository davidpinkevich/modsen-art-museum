import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { service } from "@utils/services/baseApi";
import { type TypeArt } from "@src/types";

const useDetailInfo = () => {
  const { id } = useParams();
  const [art, setArt] = useState<TypeArt | undefined>();
  const [loadArt, setLoadArt] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await service.getFullInformation(id);
        if (data) setArt(data);
        setLoadArt(false);
      }
    };
    fetchData();
  }, []);

  return { art, loadArt };
};

export { useDetailInfo };
