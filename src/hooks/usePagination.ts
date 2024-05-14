import { useEffect, useState } from "react";

import { createArrayPagination } from "@utils/helpers/changePagination";

const usePagination = (page: number, total: number) => {
  const [arr, setArr] = useState<number[]>([]);

  useEffect(() => {
    if (total !== 0) {
      const newArray = createArrayPagination(arr, page, total);
      if (newArray) setArr(newArray);
    }
  }, [arr, page, total]);

  return { arr };
};

export { usePagination };
