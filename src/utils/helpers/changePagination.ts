import { LENGTH_PAGINATION } from "@constants/data";

const createArrayPagination = (
  arrayCurrent: number[],
  current: number,
  pages: number
) => {
  const array = new Array(pages >= 3 ? LENGTH_PAGINATION : pages);
  if (!arrayCurrent.length || array.length !== arrayCurrent.length) {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = i + 1;
    }
    return array;
  } else if (arrayCurrent.length && current <= pages && current >= 1) {
    if (arrayCurrent.filter((item) => item === current).length) {
      return arrayCurrent;
    } else if (arrayCurrent[arrayCurrent.length - 1] + 1 === current) {
      return arrayCurrent.map((item) => item + 1);
    } else if (arrayCurrent[0] - 1 === current) {
      return arrayCurrent.map((item) => item - 1);
    } else {
      for (let i = 0; i < array.length; i += 1) {
        array[i] = i + 1;
      }
      return array;
    }
  }
};

const changePage = (
  page: number,
  total: number,
  type: string,
  fc: (value: number) => void,
  id?: number
) => {
  if (type === "INC" && page < total) {
    fc(page + 1);
  } else if (type === "DEC" && page > 1) {
    fc(page - 1);
  } else if (type === "CHANGE" && id) {
    fc(id);
  }
};

export { createArrayPagination, changePage };
