import { type TypeArt } from "@src/types";

const createImage = (src: string | null) => {
  return src
    ? `${process.env.BASE_URL_IMAGES}${src}/full/400,/0/default.jpg`
    : null;
};

const createImages = (items: Array<TypeArt | undefined>) => {
  return items
    .map((item) => {
      if (item) {
        return {
          ...item,
          image_id: createImage(item.image_id)
        };
      }
      return null;
    })
    .filter((item) => item !== null) as TypeArt[];
};

export { createImage, createImages };
