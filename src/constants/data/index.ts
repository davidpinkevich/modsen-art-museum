import { type TypeArtsBlock } from "@src/types";

const RANDOM_ARTS_VIEW = 9;

const RANDOM_PAGES_COUNT = 100;

const LENGTH_TITLE = 16;

const LENGTH_PAGINATION = 3;

const LENGTH_VIEW_MAIN = 3;

const FILTERS = ["public", "not-public", "view", "not-view"];

const ARTS_BLOCK: TypeArtsBlock = {
  main: {
    title: "Topics for you",
    info: "Our special gallery"
  },
  random: {
    title: "Here some more",
    info: "Other works for you"
  },
  favorites: {
    title: "Saved by you",
    info: "Your favorites list"
  }
};

export {
  RANDOM_ARTS_VIEW,
  LENGTH_TITLE,
  FILTERS,
  ARTS_BLOCK,
  LENGTH_PAGINATION,
  LENGTH_VIEW_MAIN,
  RANDOM_PAGES_COUNT
};
