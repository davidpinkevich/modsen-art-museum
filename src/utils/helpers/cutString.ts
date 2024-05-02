import { LENGTH_TITLE } from "@constants/data";

const cutString = (str: string) => {
  if (str === null) {
    return "";
  } else if (str.length <= LENGTH_TITLE) {
    return str;
  } else {
    return str.slice(0, LENGTH_TITLE) + "...";
  }
};

export { cutString };
