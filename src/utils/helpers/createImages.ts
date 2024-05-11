import { QUERY_IMAGE } from "@constants/data";
import { type TypeArt } from "@src/types";

const createImage = (src: string | null) => {
  return src ? `${process.env.BASE_URL_IMAGES}${src}${QUERY_IMAGE}` : null;
};

const createImages = (items: Array<TypeArt | undefined>) => {
  return items
    .filter((item): item is TypeArt => item !== undefined)
    .map((item) => ({
      ...item,
      image_id: createImage(item.image_id)
    }));
};

export { createImage, createImages };
