import { type TypeArt } from "@src/types";

const createImages = (items: TypeArt[]) => {
  return items.map((item) => {
    const url = item.image_id
      ? `${process.env.BASE_URL_IMAGES}${item.image_id}/full/200,/0/default.jpg`
      : null;
    return {
      ...item,
      image_id: url
    };
  });
};

export { createImages };
